import { HttpRequest } from "@smithy/protocol-http";
import { AbsoluteLocation, BuildHandlerOptions, BuildMiddleware, Pluggable, RequestHandler } from "@smithy/types";

/**
 * @public
 */
export interface HostHeaderInputConfig {}

interface PreviouslyResolved {
  requestHandler: RequestHandler<any, any>;
}

/**
 * @internal
 */
export interface HostHeaderResolvedConfig {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler: RequestHandler<any, any>;
}

/**
 * @internal
 */
export function resolveHostHeaderConfig<T>(
  input: T & PreviouslyResolved & HostHeaderInputConfig
): T & HostHeaderResolvedConfig {
  return input;
}

/**
 * @internal
 */
export const hostHeaderMiddleware =
  <Input extends object, Output extends object>(options: HostHeaderResolvedConfig): BuildMiddleware<Input, Output> =>
  (next) =>
  async (args) => {
    if (!HttpRequest.isInstance(args.request)) return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    //For H2 request, remove 'host' header and use ':authority' header instead
    //reference: https://nodejs.org/dist/latest-v13.x/docs/api/errors.html#ERR_HTTP2_INVALID_CONNECTION_HEADERS
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
      delete request.headers["host"];
      request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
      //non-H2 request and 'host' header is not set, set the 'host' header to request's hostname.
    } else if (!request.headers["host"]) {
      let host = request.hostname;
      if (request.port != null) host += `:${request.port}`;
      request.headers["host"] = host;
    }
    return next(args);
  };

/**
 * @internal
 */
export const hostHeaderMiddlewareOptions: BuildHandlerOptions & AbsoluteLocation = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true,
};

/**
 * @internal
 */
export const getHostHeaderPlugin = (options: HostHeaderResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  },
});
