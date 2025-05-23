// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultWAFRegionalHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AssociateWebACLCommandInput, AssociateWebACLCommandOutput } from "./commands/AssociateWebACLCommand";
import { CreateByteMatchSetCommandInput, CreateByteMatchSetCommandOutput } from "./commands/CreateByteMatchSetCommand";
import { CreateGeoMatchSetCommandInput, CreateGeoMatchSetCommandOutput } from "./commands/CreateGeoMatchSetCommand";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import {
  CreateRateBasedRuleCommandInput,
  CreateRateBasedRuleCommandOutput,
} from "./commands/CreateRateBasedRuleCommand";
import {
  CreateRegexMatchSetCommandInput,
  CreateRegexMatchSetCommandOutput,
} from "./commands/CreateRegexMatchSetCommand";
import {
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "./commands/CreateRegexPatternSetCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "./commands/CreateRuleGroupCommand";
import {
  CreateSizeConstraintSetCommandInput,
  CreateSizeConstraintSetCommandOutput,
} from "./commands/CreateSizeConstraintSetCommand";
import {
  CreateSqlInjectionMatchSetCommandInput,
  CreateSqlInjectionMatchSetCommandOutput,
} from "./commands/CreateSqlInjectionMatchSetCommand";
import { CreateWebACLCommandInput, CreateWebACLCommandOutput } from "./commands/CreateWebACLCommand";
import {
  CreateWebACLMigrationStackCommandInput,
  CreateWebACLMigrationStackCommandOutput,
} from "./commands/CreateWebACLMigrationStackCommand";
import { CreateXssMatchSetCommandInput, CreateXssMatchSetCommandOutput } from "./commands/CreateXssMatchSetCommand";
import { DeleteByteMatchSetCommandInput, DeleteByteMatchSetCommandOutput } from "./commands/DeleteByteMatchSetCommand";
import { DeleteGeoMatchSetCommandInput, DeleteGeoMatchSetCommandOutput } from "./commands/DeleteGeoMatchSetCommand";
import { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import {
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "./commands/DeleteLoggingConfigurationCommand";
import {
  DeletePermissionPolicyCommandInput,
  DeletePermissionPolicyCommandOutput,
} from "./commands/DeletePermissionPolicyCommand";
import {
  DeleteRateBasedRuleCommandInput,
  DeleteRateBasedRuleCommandOutput,
} from "./commands/DeleteRateBasedRuleCommand";
import {
  DeleteRegexMatchSetCommandInput,
  DeleteRegexMatchSetCommandOutput,
} from "./commands/DeleteRegexMatchSetCommand";
import {
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "./commands/DeleteRegexPatternSetCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "./commands/DeleteRuleGroupCommand";
import {
  DeleteSizeConstraintSetCommandInput,
  DeleteSizeConstraintSetCommandOutput,
} from "./commands/DeleteSizeConstraintSetCommand";
import {
  DeleteSqlInjectionMatchSetCommandInput,
  DeleteSqlInjectionMatchSetCommandOutput,
} from "./commands/DeleteSqlInjectionMatchSetCommand";
import { DeleteWebACLCommandInput, DeleteWebACLCommandOutput } from "./commands/DeleteWebACLCommand";
import { DeleteXssMatchSetCommandInput, DeleteXssMatchSetCommandOutput } from "./commands/DeleteXssMatchSetCommand";
import { DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput } from "./commands/DisassociateWebACLCommand";
import { GetByteMatchSetCommandInput, GetByteMatchSetCommandOutput } from "./commands/GetByteMatchSetCommand";
import { GetChangeTokenCommandInput, GetChangeTokenCommandOutput } from "./commands/GetChangeTokenCommand";
import {
  GetChangeTokenStatusCommandInput,
  GetChangeTokenStatusCommandOutput,
} from "./commands/GetChangeTokenStatusCommand";
import { GetGeoMatchSetCommandInput, GetGeoMatchSetCommandOutput } from "./commands/GetGeoMatchSetCommand";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand";
import {
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "./commands/GetPermissionPolicyCommand";
import { GetRateBasedRuleCommandInput, GetRateBasedRuleCommandOutput } from "./commands/GetRateBasedRuleCommand";
import {
  GetRateBasedRuleManagedKeysCommandInput,
  GetRateBasedRuleManagedKeysCommandOutput,
} from "./commands/GetRateBasedRuleManagedKeysCommand";
import { GetRegexMatchSetCommandInput, GetRegexMatchSetCommandOutput } from "./commands/GetRegexMatchSetCommand";
import { GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput } from "./commands/GetRegexPatternSetCommand";
import { GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import { GetRuleGroupCommandInput, GetRuleGroupCommandOutput } from "./commands/GetRuleGroupCommand";
import { GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput } from "./commands/GetSampledRequestsCommand";
import {
  GetSizeConstraintSetCommandInput,
  GetSizeConstraintSetCommandOutput,
} from "./commands/GetSizeConstraintSetCommand";
import {
  GetSqlInjectionMatchSetCommandInput,
  GetSqlInjectionMatchSetCommandOutput,
} from "./commands/GetSqlInjectionMatchSetCommand";
import { GetWebACLCommandInput, GetWebACLCommandOutput } from "./commands/GetWebACLCommand";
import {
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput,
} from "./commands/GetWebACLForResourceCommand";
import { GetXssMatchSetCommandInput, GetXssMatchSetCommandOutput } from "./commands/GetXssMatchSetCommand";
import {
  ListActivatedRulesInRuleGroupCommandInput,
  ListActivatedRulesInRuleGroupCommandOutput,
} from "./commands/ListActivatedRulesInRuleGroupCommand";
import { ListByteMatchSetsCommandInput, ListByteMatchSetsCommandOutput } from "./commands/ListByteMatchSetsCommand";
import { ListGeoMatchSetsCommandInput, ListGeoMatchSetsCommandOutput } from "./commands/ListGeoMatchSetsCommand";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand";
import { ListRateBasedRulesCommandInput, ListRateBasedRulesCommandOutput } from "./commands/ListRateBasedRulesCommand";
import { ListRegexMatchSetsCommandInput, ListRegexMatchSetsCommandOutput } from "./commands/ListRegexMatchSetsCommand";
import {
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "./commands/ListRegexPatternSetsCommand";
import {
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput,
} from "./commands/ListResourcesForWebACLCommand";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "./commands/ListRuleGroupsCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListSizeConstraintSetsCommandInput,
  ListSizeConstraintSetsCommandOutput,
} from "./commands/ListSizeConstraintSetsCommand";
import {
  ListSqlInjectionMatchSetsCommandInput,
  ListSqlInjectionMatchSetsCommandOutput,
} from "./commands/ListSqlInjectionMatchSetsCommand";
import {
  ListSubscribedRuleGroupsCommandInput,
  ListSubscribedRuleGroupsCommandOutput,
} from "./commands/ListSubscribedRuleGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWebACLsCommandInput, ListWebACLsCommandOutput } from "./commands/ListWebACLsCommand";
import { ListXssMatchSetsCommandInput, ListXssMatchSetsCommandOutput } from "./commands/ListXssMatchSetsCommand";
import {
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "./commands/PutLoggingConfigurationCommand";
import {
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
} from "./commands/PutPermissionPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateByteMatchSetCommandInput, UpdateByteMatchSetCommandOutput } from "./commands/UpdateByteMatchSetCommand";
import { UpdateGeoMatchSetCommandInput, UpdateGeoMatchSetCommandOutput } from "./commands/UpdateGeoMatchSetCommand";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import {
  UpdateRateBasedRuleCommandInput,
  UpdateRateBasedRuleCommandOutput,
} from "./commands/UpdateRateBasedRuleCommand";
import {
  UpdateRegexMatchSetCommandInput,
  UpdateRegexMatchSetCommandOutput,
} from "./commands/UpdateRegexMatchSetCommand";
import {
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "./commands/UpdateRegexPatternSetCommand";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "./commands/UpdateRuleGroupCommand";
import {
  UpdateSizeConstraintSetCommandInput,
  UpdateSizeConstraintSetCommandOutput,
} from "./commands/UpdateSizeConstraintSetCommand";
import {
  UpdateSqlInjectionMatchSetCommandInput,
  UpdateSqlInjectionMatchSetCommandOutput,
} from "./commands/UpdateSqlInjectionMatchSetCommand";
import { UpdateWebACLCommandInput, UpdateWebACLCommandOutput } from "./commands/UpdateWebACLCommand";
import { UpdateXssMatchSetCommandInput, UpdateXssMatchSetCommandOutput } from "./commands/UpdateXssMatchSetCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateWebACLCommandInput
  | CreateByteMatchSetCommandInput
  | CreateGeoMatchSetCommandInput
  | CreateIPSetCommandInput
  | CreateRateBasedRuleCommandInput
  | CreateRegexMatchSetCommandInput
  | CreateRegexPatternSetCommandInput
  | CreateRuleCommandInput
  | CreateRuleGroupCommandInput
  | CreateSizeConstraintSetCommandInput
  | CreateSqlInjectionMatchSetCommandInput
  | CreateWebACLCommandInput
  | CreateWebACLMigrationStackCommandInput
  | CreateXssMatchSetCommandInput
  | DeleteByteMatchSetCommandInput
  | DeleteGeoMatchSetCommandInput
  | DeleteIPSetCommandInput
  | DeleteLoggingConfigurationCommandInput
  | DeletePermissionPolicyCommandInput
  | DeleteRateBasedRuleCommandInput
  | DeleteRegexMatchSetCommandInput
  | DeleteRegexPatternSetCommandInput
  | DeleteRuleCommandInput
  | DeleteRuleGroupCommandInput
  | DeleteSizeConstraintSetCommandInput
  | DeleteSqlInjectionMatchSetCommandInput
  | DeleteWebACLCommandInput
  | DeleteXssMatchSetCommandInput
  | DisassociateWebACLCommandInput
  | GetByteMatchSetCommandInput
  | GetChangeTokenCommandInput
  | GetChangeTokenStatusCommandInput
  | GetGeoMatchSetCommandInput
  | GetIPSetCommandInput
  | GetLoggingConfigurationCommandInput
  | GetPermissionPolicyCommandInput
  | GetRateBasedRuleCommandInput
  | GetRateBasedRuleManagedKeysCommandInput
  | GetRegexMatchSetCommandInput
  | GetRegexPatternSetCommandInput
  | GetRuleCommandInput
  | GetRuleGroupCommandInput
  | GetSampledRequestsCommandInput
  | GetSizeConstraintSetCommandInput
  | GetSqlInjectionMatchSetCommandInput
  | GetWebACLCommandInput
  | GetWebACLForResourceCommandInput
  | GetXssMatchSetCommandInput
  | ListActivatedRulesInRuleGroupCommandInput
  | ListByteMatchSetsCommandInput
  | ListGeoMatchSetsCommandInput
  | ListIPSetsCommandInput
  | ListLoggingConfigurationsCommandInput
  | ListRateBasedRulesCommandInput
  | ListRegexMatchSetsCommandInput
  | ListRegexPatternSetsCommandInput
  | ListResourcesForWebACLCommandInput
  | ListRuleGroupsCommandInput
  | ListRulesCommandInput
  | ListSizeConstraintSetsCommandInput
  | ListSqlInjectionMatchSetsCommandInput
  | ListSubscribedRuleGroupsCommandInput
  | ListTagsForResourceCommandInput
  | ListWebACLsCommandInput
  | ListXssMatchSetsCommandInput
  | PutLoggingConfigurationCommandInput
  | PutPermissionPolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateByteMatchSetCommandInput
  | UpdateGeoMatchSetCommandInput
  | UpdateIPSetCommandInput
  | UpdateRateBasedRuleCommandInput
  | UpdateRegexMatchSetCommandInput
  | UpdateRegexPatternSetCommandInput
  | UpdateRuleCommandInput
  | UpdateRuleGroupCommandInput
  | UpdateSizeConstraintSetCommandInput
  | UpdateSqlInjectionMatchSetCommandInput
  | UpdateWebACLCommandInput
  | UpdateXssMatchSetCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateWebACLCommandOutput
  | CreateByteMatchSetCommandOutput
  | CreateGeoMatchSetCommandOutput
  | CreateIPSetCommandOutput
  | CreateRateBasedRuleCommandOutput
  | CreateRegexMatchSetCommandOutput
  | CreateRegexPatternSetCommandOutput
  | CreateRuleCommandOutput
  | CreateRuleGroupCommandOutput
  | CreateSizeConstraintSetCommandOutput
  | CreateSqlInjectionMatchSetCommandOutput
  | CreateWebACLCommandOutput
  | CreateWebACLMigrationStackCommandOutput
  | CreateXssMatchSetCommandOutput
  | DeleteByteMatchSetCommandOutput
  | DeleteGeoMatchSetCommandOutput
  | DeleteIPSetCommandOutput
  | DeleteLoggingConfigurationCommandOutput
  | DeletePermissionPolicyCommandOutput
  | DeleteRateBasedRuleCommandOutput
  | DeleteRegexMatchSetCommandOutput
  | DeleteRegexPatternSetCommandOutput
  | DeleteRuleCommandOutput
  | DeleteRuleGroupCommandOutput
  | DeleteSizeConstraintSetCommandOutput
  | DeleteSqlInjectionMatchSetCommandOutput
  | DeleteWebACLCommandOutput
  | DeleteXssMatchSetCommandOutput
  | DisassociateWebACLCommandOutput
  | GetByteMatchSetCommandOutput
  | GetChangeTokenCommandOutput
  | GetChangeTokenStatusCommandOutput
  | GetGeoMatchSetCommandOutput
  | GetIPSetCommandOutput
  | GetLoggingConfigurationCommandOutput
  | GetPermissionPolicyCommandOutput
  | GetRateBasedRuleCommandOutput
  | GetRateBasedRuleManagedKeysCommandOutput
  | GetRegexMatchSetCommandOutput
  | GetRegexPatternSetCommandOutput
  | GetRuleCommandOutput
  | GetRuleGroupCommandOutput
  | GetSampledRequestsCommandOutput
  | GetSizeConstraintSetCommandOutput
  | GetSqlInjectionMatchSetCommandOutput
  | GetWebACLCommandOutput
  | GetWebACLForResourceCommandOutput
  | GetXssMatchSetCommandOutput
  | ListActivatedRulesInRuleGroupCommandOutput
  | ListByteMatchSetsCommandOutput
  | ListGeoMatchSetsCommandOutput
  | ListIPSetsCommandOutput
  | ListLoggingConfigurationsCommandOutput
  | ListRateBasedRulesCommandOutput
  | ListRegexMatchSetsCommandOutput
  | ListRegexPatternSetsCommandOutput
  | ListResourcesForWebACLCommandOutput
  | ListRuleGroupsCommandOutput
  | ListRulesCommandOutput
  | ListSizeConstraintSetsCommandOutput
  | ListSqlInjectionMatchSetsCommandOutput
  | ListSubscribedRuleGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWebACLsCommandOutput
  | ListXssMatchSetsCommandOutput
  | PutLoggingConfigurationCommandOutput
  | PutPermissionPolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateByteMatchSetCommandOutput
  | UpdateGeoMatchSetCommandOutput
  | UpdateIPSetCommandOutput
  | UpdateRateBasedRuleCommandOutput
  | UpdateRegexMatchSetCommandOutput
  | UpdateRegexPatternSetCommandOutput
  | UpdateRuleCommandOutput
  | UpdateRuleGroupCommandOutput
  | UpdateSizeConstraintSetCommandOutput
  | UpdateSqlInjectionMatchSetCommandOutput
  | UpdateWebACLCommandOutput
  | UpdateXssMatchSetCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type WAFRegionalClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of WAFRegionalClient class constructor that set the region, credentials and other options.
 */
export interface WAFRegionalClientConfig extends WAFRegionalClientConfigType {}

/**
 * @public
 */
export type WAFRegionalClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of WAFRegionalClient class. This is resolved and normalized from the {@link WAFRegionalClientConfig | constructor configuration interface}.
 */
export interface WAFRegionalClientResolvedConfig extends WAFRegionalClientResolvedConfigType {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic Regional</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>This is the <i>AWS WAF Regional Classic API Reference</i> for using AWS WAF Classic with the AWS resources, Elastic Load Balancing (ELB) Application Load Balancers and API Gateway APIs. The AWS WAF Classic actions and data types listed in the reference are available for protecting Elastic Load Balancing (ELB) Application Load Balancers and API Gateway APIs. You can use these actions and data types by means of the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Regions and Endpoints</a>. This guide is for developers who need detailed information about the AWS WAF Classic API actions, data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the
 *       <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *         WAF Classic</a> in the developer guide.</p>
 * @public
 */
export class WAFRegionalClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFRegionalClientResolvedConfig
> {
  /**
   * The resolved configuration of WAFRegionalClient class. This is resolved and normalized from the {@link WAFRegionalClientConfig | constructor configuration interface}.
   */
  readonly config: WAFRegionalClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<WAFRegionalClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultWAFRegionalHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: WAFRegionalClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
