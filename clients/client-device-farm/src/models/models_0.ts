// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DeviceFarmServiceException as __BaseException } from "./DeviceFarmServiceException";

/**
 * <p>Represents information about free trial device minutes for an AWS
 *             account.</p>
 * @public
 */
export interface TrialMinutes {
  /**
   * <p>The total number of free trial minutes that the account started with.</p>
   * @public
   */
  total?: number | undefined;

  /**
   * <p>The number of free trial minutes remaining in the account.</p>
   * @public
   */
  remaining?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DevicePlatform = {
  ANDROID: "ANDROID",
  IOS: "IOS",
} as const;

/**
 * @public
 */
export type DevicePlatform = (typeof DevicePlatform)[keyof typeof DevicePlatform];

/**
 * <p>A container for account-level settings in AWS Device Farm.</p>
 * @public
 */
export interface AccountSettings {
  /**
   * <p>The AWS account number specified in the <code>AccountSettings</code>
   *             container.</p>
   * @public
   */
  awsAccountNumber?: string | undefined;

  /**
   * <p>Returns the unmetered devices you have purchased or want to purchase.</p>
   * @public
   */
  unmeteredDevices?: Partial<Record<DevicePlatform, number>> | undefined;

  /**
   * <p>Returns the unmetered remote access devices you have purchased or want to
   *             purchase.</p>
   * @public
   */
  unmeteredRemoteAccessDevices?: Partial<Record<DevicePlatform, number>> | undefined;

  /**
   * <p>The maximum number of minutes a test run executes before it times out.</p>
   * @public
   */
  maxJobTimeoutMinutes?: number | undefined;

  /**
   * <p>Information about an AWS account's usage of free trial device minutes.</p>
   * @public
   */
  trialMinutes?: TrialMinutes | undefined;

  /**
   * <p>The maximum number of device slots that the AWS account can purchase. Each maximum
   *             is expressed as an <code>offering-id:number</code> pair, where the
   *                 <code>offering-id</code> represents one of the IDs returned by the
   *                 <code>ListOfferings</code> command.</p>
   * @public
   */
  maxSlots?: Record<string, number> | undefined;

  /**
   * <p>The default number of minutes (at the account level) a test run executes before it times out. The
   *             default value is 150 minutes.</p>
   * @public
   */
  defaultJobTimeoutMinutes?: number | undefined;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public
   *             devices, Device Farm always signs your apps again.</p>
   *         <p>For more information about how Device Farm re-signs your apps, see <a href="http://aws.amazon.com/device-farm/faqs/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   * @public
   */
  skipAppResign?: boolean | undefined;
}

/**
 * <p>An invalid argument was specified.</p>
 * @public
 */
export class ArgumentException extends __BaseException {
  readonly name: "ArgumentException" = "ArgumentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ArgumentException, __BaseException>) {
    super({
      name: "ArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ArgumentException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ArtifactType = {
  APPIUM_JAVA_OUTPUT: "APPIUM_JAVA_OUTPUT",
  APPIUM_JAVA_XML_OUTPUT: "APPIUM_JAVA_XML_OUTPUT",
  APPIUM_PYTHON_OUTPUT: "APPIUM_PYTHON_OUTPUT",
  APPIUM_PYTHON_XML_OUTPUT: "APPIUM_PYTHON_XML_OUTPUT",
  APPIUM_SERVER_OUTPUT: "APPIUM_SERVER_OUTPUT",
  APPLICATION_CRASH_REPORT: "APPLICATION_CRASH_REPORT",
  AUTOMATION_OUTPUT: "AUTOMATION_OUTPUT",
  CALABASH_JAVA_XML_OUTPUT: "CALABASH_JAVA_XML_OUTPUT",
  CALABASH_JSON_OUTPUT: "CALABASH_JSON_OUTPUT",
  CALABASH_PRETTY_OUTPUT: "CALABASH_PRETTY_OUTPUT",
  CALABASH_STANDARD_OUTPUT: "CALABASH_STANDARD_OUTPUT",
  CUSTOMER_ARTIFACT: "CUSTOMER_ARTIFACT",
  CUSTOMER_ARTIFACT_LOG: "CUSTOMER_ARTIFACT_LOG",
  DEVICE_LOG: "DEVICE_LOG",
  EXERCISER_MONKEY_OUTPUT: "EXERCISER_MONKEY_OUTPUT",
  EXPLORER_EVENT_LOG: "EXPLORER_EVENT_LOG",
  EXPLORER_SUMMARY_LOG: "EXPLORER_SUMMARY_LOG",
  INSTRUMENTATION_OUTPUT: "INSTRUMENTATION_OUTPUT",
  MESSAGE_LOG: "MESSAGE_LOG",
  RESULT_LOG: "RESULT_LOG",
  SCREENSHOT: "SCREENSHOT",
  SERVICE_LOG: "SERVICE_LOG",
  TESTSPEC_OUTPUT: "TESTSPEC_OUTPUT",
  UNKNOWN: "UNKNOWN",
  VIDEO: "VIDEO",
  VIDEO_LOG: "VIDEO_LOG",
  WEBKIT_LOG: "WEBKIT_LOG",
  XCTEST_LOG: "XCTEST_LOG",
} as const;

/**
 * @public
 */
export type ArtifactType = (typeof ArtifactType)[keyof typeof ArtifactType];

/**
 * <p>Represents the output of a test. Examples of artifacts include logs and
 *             screenshots.</p>
 * @public
 */
export interface Artifact {
  /**
   * <p>The artifact's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The artifact's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The artifact's type.</p>
   *         <p>Allowed values include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>UNKNOWN</p>
   *             </li>
   *             <li>
   *                 <p>SCREENSHOT</p>
   *             </li>
   *             <li>
   *                 <p>DEVICE_LOG</p>
   *             </li>
   *             <li>
   *                 <p>MESSAGE_LOG</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO_LOG</p>
   *             </li>
   *             <li>
   *                 <p>RESULT_LOG</p>
   *             </li>
   *             <li>
   *                 <p>SERVICE_LOG</p>
   *             </li>
   *             <li>
   *                 <p>WEBKIT_LOG</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>EXERCISER_MONKEY_OUTPUT: the artifact (log) generated by an Android fuzz test.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_SERVER_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_XML_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_XML_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>APPLICATION_CRASH_REPORT</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_LOG</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO</p>
   *             </li>
   *             <li>
   *                 <p>CUSTOMER_ARTIFACT</p>
   *             </li>
   *             <li>
   *                 <p>CUSTOMER_ARTIFACT_LOG</p>
   *             </li>
   *             <li>
   *                 <p>TESTSPEC_OUTPUT</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: ArtifactType | undefined;

  /**
   * <p>The artifact's file extension.</p>
   * @public
   */
  extension?: string | undefined;

  /**
   * <p>The presigned Amazon S3 URL that can be used with a GET request to download the artifact's
   *             file.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ArtifactCategory = {
  FILE: "FILE",
  LOG: "LOG",
  SCREENSHOT: "SCREENSHOT",
} as const;

/**
 * @public
 */
export type ArtifactCategory = (typeof ArtifactCategory)[keyof typeof ArtifactCategory];

/**
 * @public
 * @enum
 */
export const BillingMethod = {
  METERED: "METERED",
  UNMETERED: "UNMETERED",
} as const;

/**
 * @public
 */
export type BillingMethod = (typeof BillingMethod)[keyof typeof BillingMethod];

/**
 * <p>The requested object could not be deleted.</p>
 * @public
 */
export class CannotDeleteException extends __BaseException {
  readonly name: "CannotDeleteException" = "CannotDeleteException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotDeleteException, __BaseException>) {
    super({
      name: "CannotDeleteException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotDeleteException.prototype);
  }
}

/**
 * <p>Represents entity counters.</p>
 * @public
 */
export interface Counters {
  /**
   * <p>The total number of entities.</p>
   * @public
   */
  total?: number | undefined;

  /**
   * <p>The number of passed entities.</p>
   * @public
   */
  passed?: number | undefined;

  /**
   * <p>The number of failed entities.</p>
   * @public
   */
  failed?: number | undefined;

  /**
   * <p>The number of warned entities.</p>
   * @public
   */
  warned?: number | undefined;

  /**
   * <p>The number of errored entities.</p>
   * @public
   */
  errored?: number | undefined;

  /**
   * <p>The number of stopped entities.</p>
   * @public
   */
  stopped?: number | undefined;

  /**
   * <p>The number of skipped entities.</p>
   * @public
   */
  skipped?: number | undefined;
}

/**
 * <p>Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide
 *             CPU usage.</p>
 * @public
 */
export interface CPU {
  /**
   * <p>The CPU's frequency.</p>
   * @public
   */
  frequency?: string | undefined;

  /**
   * <p>The CPU's architecture (for example, x86 or ARM).</p>
   * @public
   */
  architecture?: string | undefined;

  /**
   * <p>The clock speed of the device's CPU, expressed in hertz (Hz). For example, a 1.2
   *             GHz CPU is expressed as 1200000000.</p>
   * @public
   */
  clock?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceAttribute = {
  APPIUM_VERSION: "APPIUM_VERSION",
  ARN: "ARN",
  AVAILABILITY: "AVAILABILITY",
  FLEET_TYPE: "FLEET_TYPE",
  FORM_FACTOR: "FORM_FACTOR",
  INSTANCE_ARN: "INSTANCE_ARN",
  INSTANCE_LABELS: "INSTANCE_LABELS",
  MANUFACTURER: "MANUFACTURER",
  MODEL: "MODEL",
  OS_VERSION: "OS_VERSION",
  PLATFORM: "PLATFORM",
  REMOTE_ACCESS_ENABLED: "REMOTE_ACCESS_ENABLED",
  REMOTE_DEBUG_ENABLED: "REMOTE_DEBUG_ENABLED",
} as const;

/**
 * @public
 */
export type DeviceAttribute = (typeof DeviceAttribute)[keyof typeof DeviceAttribute];

/**
 * @public
 * @enum
 */
export const RuleOperator = {
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUALS: "GREATER_THAN_OR_EQUALS",
  IN: "IN",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUALS: "LESS_THAN_OR_EQUALS",
  NOT_IN: "NOT_IN",
} as const;

/**
 * @public
 */
export type RuleOperator = (typeof RuleOperator)[keyof typeof RuleOperator];

/**
 * <p>Represents a condition for a device pool.</p>
 * @public
 */
export interface Rule {
  /**
   * <p>The rule's stringified attribute. For example, specify the value as
   *                 <code>"\"abc\""</code>.</p>
   *         <p>The supported operators for each attribute are provided in the following
   *             list.</p>
   *         <dl>
   *             <dt>APPIUM_VERSION</dt>
   *             <dd>
   *                     <p>The Appium version for the test.</p>
   *                     <p>Supported operators: <code>CONTAINS</code>
   *                </p>
   *                 </dd>
   *             <dt>ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device (for example,
   *                         <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>.</p>
   *                     <p>Supported operators: <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>AVAILABILITY</dt>
   *             <dd>
   *                     <p>The current availability of the device. Valid values are AVAILABLE,
   *                         HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>FLEET_TYPE</dt>
   *             <dd>
   *                     <p>The fleet type. Valid values are PUBLIC or PRIVATE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>FORM_FACTOR</dt>
   *             <dd>
   *                     <p>The device form factor. Valid values are PHONE or TABLET.</p>
   *                     <p>Supported operators: <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>INSTANCE_ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device instance.</p>
   *                     <p>Supported operators: <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>INSTANCE_LABELS</dt>
   *             <dd>
   *                     <p>The label of the device instance.</p>
   *                     <p>Supported operators: <code>CONTAINS</code>
   *                </p>
   *                 </dd>
   *             <dt>MANUFACTURER</dt>
   *             <dd>
   *                     <p>The device manufacturer (for example, Apple).</p>
   *                     <p>Supported operators: <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>MODEL</dt>
   *             <dd>
   *                     <p>The device model, such as Apple iPad Air 2 or Google Pixel.</p>
   *                     <p>Supported operators: <code>CONTAINS</code>,
   *                             <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>OS_VERSION</dt>
   *             <dd>
   *                     <p>The operating system version (for example, 10.3.2).</p>
   *                     <p>Supported operators: <code>EQUALS</code>,
   *                             <code>GREATER_THAN</code>, <code>GREATER_THAN_OR_EQUALS</code>,
   *                             <code>IN</code>, <code>LESS_THAN</code>,
   *                             <code>LESS_THAN_OR_EQUALS</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>PLATFORM</dt>
   *             <dd>
   *                     <p>The device platform. Valid values are ANDROID or IOS.</p>
   *                     <p>Supported operators: <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_ACCESS_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote access. Valid values are TRUE
   *                         or FALSE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_DEBUG_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote debugging. Valid values are
   *                         TRUE or FALSE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                     <p>Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                         longer supported</a>, this filter is ignored.</p>
   *                 </dd>
   *          </dl>
   * @public
   */
  attribute?: DeviceAttribute | undefined;

  /**
   * <p>Specifies how Device Farm compares the rule's attribute to the value. For the
   *             operators that are supported by each attribute, see the attribute
   *             descriptions.</p>
   * @public
   */
  operator?: RuleOperator | undefined;

  /**
   * <p>The rule's value.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Represents a request to the create device pool operation.</p>
 * @public
 */
export interface CreateDevicePoolRequest {
  /**
   * <p>The ARN of the project for the device pool.</p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>The device pool's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The device pool's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The device pool's rules.</p>
   * @public
   */
  rules: Rule[] | undefined;

  /**
   * <p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are
   *             available and meet the criteria that you assign for the <code>rules</code> parameter. Depending on how many
   *             devices meet these constraints, your device pool might contain fewer devices than the value for this
   *             parameter.</p>
   *         <p>By specifying the maximum number of devices, you can control the costs that you incur
   *             by running tests.</p>
   * @public
   */
  maxDevices?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DevicePoolType = {
  CURATED: "CURATED",
  PRIVATE: "PRIVATE",
} as const;

/**
 * @public
 */
export type DevicePoolType = (typeof DevicePoolType)[keyof typeof DevicePoolType];

/**
 * <p>Represents a collection of device types.</p>
 * @public
 */
export interface DevicePool {
  /**
   * <p>The device pool's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The device pool's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The device pool's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The device pool's type.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>CURATED: A device pool that is created and managed by AWS Device
   *                     Farm.</p>
   *             </li>
   *             <li>
   *                 <p>PRIVATE: A device pool that is created and managed by the device pool
   *                     developer.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: DevicePoolType | undefined;

  /**
   * <p>Information about the device pool's rules.</p>
   * @public
   */
  rules?: Rule[] | undefined;

  /**
   * <p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are
   *             available and meet the criteria that you assign for the <code>rules</code> parameter. Depending on how many
   *             devices meet these constraints, your device pool might contain fewer devices than the value for this
   *             parameter.</p>
   *         <p>By specifying the maximum number of devices, you can control the costs that you incur
   *             by running tests.</p>
   * @public
   */
  maxDevices?: number | undefined;
}

/**
 * <p>Represents the result of a create device pool request.</p>
 * @public
 */
export interface CreateDevicePoolResult {
  /**
   * <p>The newly created device pool.</p>
   * @public
   */
  devicePool?: DevicePool | undefined;
}

/**
 * <p>A limit was exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The specified entity was not found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>There was a problem with the service account.</p>
 * @public
 */
export class ServiceAccountException extends __BaseException {
  readonly name: "ServiceAccountException" = "ServiceAccountException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceAccountException, __BaseException>) {
    super({
      name: "ServiceAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceAccountException.prototype);
  }
}

/**
 * @public
 */
export interface CreateInstanceProfileRequest {
  /**
   * <p>The name of your instance profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of your instance profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>When set to <code>true</code>, Device Farm removes app packages after a test run. The default value is
   *                 <code>false</code> for private devices.</p>
   * @public
   */
  packageCleanup?: boolean | undefined;

  /**
   * <p>An array of strings that specifies the list of app packages that should not be cleaned up from the device
   *             after a test run.</p>
   *         <p>The list of packages is considered only if you set <code>packageCleanup</code> to
   *             <code>true</code>.</p>
   * @public
   */
  excludeAppPackagesFromCleanup?: string[] | undefined;

  /**
   * <p>When set to <code>true</code>, Device Farm reboots the instance after a test run. The default value is
   *                 <code>true</code>.</p>
   * @public
   */
  rebootAfterUse?: boolean | undefined;
}

/**
 * <p>Represents the instance profile.</p>
 * @public
 */
export interface InstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>When set to <code>true</code>, Device Farm removes app packages after a test run. The default value is
   *                 <code>false</code> for private devices.</p>
   * @public
   */
  packageCleanup?: boolean | undefined;

  /**
   * <p>An array of strings containing the list of app packages that should not be cleaned up from the device
   *             after a test run completes.</p>
   *         <p>The list of packages is considered only if you set <code>packageCleanup</code> to
   *             <code>true</code>.</p>
   * @public
   */
  excludeAppPackagesFromCleanup?: string[] | undefined;

  /**
   * <p>When set to <code>true</code>, Device Farm reboots the instance after a test run. The default value is
   *                 <code>true</code>.</p>
   * @public
   */
  rebootAfterUse?: boolean | undefined;

  /**
   * <p>The name of the instance profile.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the instance profile.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceProfileResult {
  /**
   * <p>An object that contains information about your instance profile.</p>
   * @public
   */
  instanceProfile?: InstanceProfile | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkProfileType = {
  CURATED: "CURATED",
  PRIVATE: "PRIVATE",
} as const;

/**
 * @public
 */
export type NetworkProfileType = (typeof NetworkProfileType)[keyof typeof NetworkProfileType];

/**
 * @public
 */
export interface CreateNetworkProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to create a
   *             network profile.</p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>The name for the new network profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the network profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of network profile to create. Valid values are listed here.</p>
   * @public
   */
  type?: NetworkProfileType | undefined;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   * @public
   */
  uplinkBandwidthBits?: number | undefined;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   * @public
   */
  downlinkBandwidthBits?: number | undefined;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   * @public
   */
  uplinkDelayMs?: number | undefined;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   * @public
   */
  downlinkDelayMs?: number | undefined;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   * @public
   */
  uplinkJitterMs?: number | undefined;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   * @public
   */
  downlinkJitterMs?: number | undefined;

  /**
   * <p>Proportion of transmitted packets that fail to arrive from 0 to 100
   *             percent.</p>
   * @public
   */
  uplinkLossPercent?: number | undefined;

  /**
   * <p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>
   * @public
   */
  downlinkLossPercent?: number | undefined;
}

/**
 * <p>An array of settings that describes characteristics of a network profile.</p>
 * @public
 */
export interface NetworkProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the network profile.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the network profile.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the network profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of network profile. Valid values are listed here.</p>
   * @public
   */
  type?: NetworkProfileType | undefined;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   * @public
   */
  uplinkBandwidthBits?: number | undefined;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   * @public
   */
  downlinkBandwidthBits?: number | undefined;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   * @public
   */
  uplinkDelayMs?: number | undefined;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   * @public
   */
  downlinkDelayMs?: number | undefined;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   * @public
   */
  uplinkJitterMs?: number | undefined;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   * @public
   */
  downlinkJitterMs?: number | undefined;

  /**
   * <p>Proportion of transmitted packets that fail to arrive from 0 to 100
   *             percent.</p>
   * @public
   */
  uplinkLossPercent?: number | undefined;

  /**
   * <p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>
   * @public
   */
  downlinkLossPercent?: number | undefined;
}

/**
 * @public
 */
export interface CreateNetworkProfileResult {
  /**
   * <p>The network profile that is returned by the create network profile
   *             request.</p>
   * @public
   */
  networkProfile?: NetworkProfile | undefined;
}

/**
 * <p>Contains the VPC configuration data necessary to interface with AWS Device Farm's services.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>An array of one or more security groups IDs in your Amazon VPC.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>An array of one or more subnet IDs in your Amazon VPC.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The ID of the Amazon VPC.</p>
   * @public
   */
  vpcId: string | undefined;
}

/**
 * <p>Represents a request to the create project operation.</p>
 * @public
 */
export interface CreateProjectRequest {
  /**
   * <p>The project's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Sets the execution timeout value (in minutes) for a project. All test runs in this project use the
   *             specified execution timeout value unless overridden when scheduling a run.</p>
   * @public
   */
  defaultJobTimeoutMinutes?: number | undefined;

  /**
   * <p>The VPC security groups and subnets that are attached to a project.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;
}

/**
 * <p>Represents an operating-system neutral workspace for running and managing
 *             tests.</p>
 * @public
 */
export interface Project {
  /**
   * <p>The project's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The project's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The default number of minutes (at the project level) a test run executes before it times out. The
   *             default value is 150 minutes.</p>
   * @public
   */
  defaultJobTimeoutMinutes?: number | undefined;

  /**
   * <p>When the project was created.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The VPC security groups and subnets that are attached to a project.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;
}

/**
 * <p>Represents the result of a create project request.</p>
 * @public
 */
export interface CreateProjectResult {
  /**
   * <p>The newly created project.</p>
   * @public
   */
  project?: Project | undefined;
}

/**
 * <p>The operation was not successful. Try again.</p>
 * @public
 */
export class TagOperationException extends __BaseException {
  readonly name: "TagOperationException" = "TagOperationException";
  readonly $fault: "client" = "client";
  resourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagOperationException, __BaseException>) {
    super({
      name: "TagOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagOperationException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>Represents the http/s proxy configuration that will be applied to a device during a run.</p>
 * @public
 */
export interface DeviceProxy {
  /**
   * <p>Hostname or IPv4 address of the proxy.</p>
   * @public
   */
  host: string | undefined;

  /**
   * <p>The port number on which the http/s proxy is listening.</p>
   * @public
   */
  port: number | undefined;
}

/**
 * <p>Configuration settings for a remote access session, including billing
 *             method.</p>
 * @public
 */
export interface CreateRemoteAccessSessionConfiguration {
  /**
   * <p>The billing method for the remote access session.</p>
   * @public
   */
  billingMethod?: BillingMethod | undefined;

  /**
   * <p>An array of ARNs included in the VPC endpoint configuration.</p>
   * @public
   */
  vpceConfigurationArns?: string[] | undefined;

  /**
   * <p>The device proxy to be configured on the device for the remote access session.</p>
   * @public
   */
  deviceProxy?: DeviceProxy | undefined;
}

/**
 * @public
 * @enum
 */
export const InteractionMode = {
  INTERACTIVE: "INTERACTIVE",
  NO_VIDEO: "NO_VIDEO",
  VIDEO_ONLY: "VIDEO_ONLY",
} as const;

/**
 * @public
 */
export type InteractionMode = (typeof InteractionMode)[keyof typeof InteractionMode];

/**
 * <p>Creates and submits a request to start a remote access session.</p>
 * @public
 */
export interface CreateRemoteAccessSessionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to create a remote
   *             access session.</p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>The ARN of the device for which you want to create a remote access session.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device instance for which you want to create a
   *             remote access session.</p>
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * <p>Ignored. The public key of the <code>ssh</code> key pair you want to use for connecting to remote
   *             devices in your remote debugging session. This key is required only if <code>remoteDebugEnabled</code> is
   *             set to <code>true</code>.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</p>
   * @public
   */
  sshPublicKey?: string | undefined;

  /**
   * <p>Set to <code>true</code> if you want to access devices remotely for debugging in
   *             your remote access session.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</p>
   * @public
   */
  remoteDebugEnabled?: boolean | undefined;

  /**
   * <p>Set to <code>true</code> to enable remote recording for the remote access
   *             session.</p>
   * @public
   */
  remoteRecordEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the app to be recorded in the remote access
   *             session.</p>
   * @public
   */
  remoteRecordAppArn?: string | undefined;

  /**
   * <p>The name of the remote access session to create.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Unique identifier for the client. If you want access to multiple devices on the same client, you should
   *             pass the same <code>clientId</code> value in each call to <code>CreateRemoteAccessSession</code>. This
   *             identifier is required only if <code>remoteDebugEnabled</code> is set to <code>true</code>.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The configuration information for the remote access session request.</p>
   * @public
   */
  configuration?: CreateRemoteAccessSessionConfiguration | undefined;

  /**
   * <p>The interaction mode of the remote access session. Valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and
   *                     rotating the screen. You cannot run XCUITest framework-based tests in this
   *                     mode.</p>
   *             </li>
   *             <li>
   *                 <p>NO_VIDEO: You are connected to the device, but cannot interact with it or view the screen. This
   *                     mode has the fastest test execution speed. You can run XCUITest framework-based tests in this
   *                     mode.</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO_ONLY: You can view the screen, but cannot touch or rotate it. You can run XCUITest
   *                     framework-based tests and watch the screen in this mode.</p>
   *             </li>
   *          </ul>
   * @public
   */
  interactionMode?: InteractionMode | undefined;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public
   *             devices, Device Farm always signs your apps again.</p>
   *         <p>For more information on how Device Farm modifies your uploads during tests, see <a href="http://aws.amazon.com/device-farm/faqs/">Do you modify my app?</a>
   *          </p>
   * @public
   */
  skipAppResign?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceAvailability = {
  AVAILABLE: "AVAILABLE",
  BUSY: "BUSY",
  HIGHLY_AVAILABLE: "HIGHLY_AVAILABLE",
  TEMPORARY_NOT_AVAILABLE: "TEMPORARY_NOT_AVAILABLE",
} as const;

/**
 * @public
 */
export type DeviceAvailability = (typeof DeviceAvailability)[keyof typeof DeviceAvailability];

/**
 * @public
 * @enum
 */
export const DeviceFormFactor = {
  PHONE: "PHONE",
  TABLET: "TABLET",
} as const;

/**
 * @public
 */
export type DeviceFormFactor = (typeof DeviceFormFactor)[keyof typeof DeviceFormFactor];

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  AVAILABLE: "AVAILABLE",
  IN_USE: "IN_USE",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  PREPARING: "PREPARING",
} as const;

/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * <p>Represents the device instance.</p>
 * @public
 */
export interface DeviceInstance {
  /**
   * <p>The Amazon Resource Name (ARN) of the device instance.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ARN of the device.</p>
   * @public
   */
  deviceArn?: string | undefined;

  /**
   * <p>An array of strings that describe the device instance.</p>
   * @public
   */
  labels?: string[] | undefined;

  /**
   * <p>The status of the device instance. Valid values are listed here.</p>
   * @public
   */
  status?: InstanceStatus | undefined;

  /**
   * <p>Unique device identifier for the device instance.</p>
   * @public
   */
  udid?: string | undefined;

  /**
   * <p>A object that contains information about the instance profile.</p>
   * @public
   */
  instanceProfile?: InstanceProfile | undefined;
}

/**
 * <p>Represents the screen resolution of a device in height and width, expressed in
 *             pixels.</p>
 * @public
 */
export interface Resolution {
  /**
   * <p>The screen resolution's width, expressed in pixels.</p>
   * @public
   */
  width?: number | undefined;

  /**
   * <p>The screen resolution's height, expressed in pixels.</p>
   * @public
   */
  height?: number | undefined;
}

/**
 * <p>Represents a device type that an app is tested against.</p>
 * @public
 */
export interface Device {
  /**
   * <p>The device's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The device's display name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The device's manufacturer name.</p>
   * @public
   */
  manufacturer?: string | undefined;

  /**
   * <p>The device's model name.</p>
   * @public
   */
  model?: string | undefined;

  /**
   * <p>The device's model ID.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>The device's form factor.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PHONE</p>
   *             </li>
   *             <li>
   *                 <p>TABLET</p>
   *             </li>
   *          </ul>
   * @public
   */
  formFactor?: DeviceFormFactor | undefined;

  /**
   * <p>The device's platform.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID</p>
   *             </li>
   *             <li>
   *                 <p>IOS</p>
   *             </li>
   *          </ul>
   * @public
   */
  platform?: DevicePlatform | undefined;

  /**
   * <p>The device's operating system type.</p>
   * @public
   */
  os?: string | undefined;

  /**
   * <p>Information about the device's CPU.</p>
   * @public
   */
  cpu?: CPU | undefined;

  /**
   * <p>The resolution of the device.</p>
   * @public
   */
  resolution?: Resolution | undefined;

  /**
   * <p>The device's heap size, expressed in bytes.</p>
   * @public
   */
  heapSize?: number | undefined;

  /**
   * <p>The device's total memory size, expressed in bytes.</p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>The device's image name.</p>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>The device's carrier.</p>
   * @public
   */
  carrier?: string | undefined;

  /**
   * <p>The device's radio.</p>
   * @public
   */
  radio?: string | undefined;

  /**
   * <p>Specifies whether remote access has been enabled for the specified
   *             device.</p>
   * @public
   */
  remoteAccessEnabled?: boolean | undefined;

  /**
   * <p>This flag is set to <code>true</code> if remote debugging is enabled for the
   *             device.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</p>
   * @public
   */
  remoteDebugEnabled?: boolean | undefined;

  /**
   * <p>The type of fleet to which this device belongs. Possible values are PRIVATE and PUBLIC.</p>
   * @public
   */
  fleetType?: string | undefined;

  /**
   * <p>The name of the fleet to which this device belongs.</p>
   * @public
   */
  fleetName?: string | undefined;

  /**
   * <p>The instances that belong to this device.</p>
   * @public
   */
  instances?: DeviceInstance[] | undefined;

  /**
   * <p>Indicates how likely a device is available for a test run. Currently available in the <a>ListDevices</a> and GetDevice API methods.</p>
   * @public
   */
  availability?: DeviceAvailability | undefined;
}

/**
 * <p>Represents the total (metered or unmetered) minutes used by the resource to run
 *             tests. Contains the sum of minutes consumed by all children.</p>
 * @public
 */
export interface DeviceMinutes {
  /**
   * <p>When specified, represents the total minutes used by the resource to run
   *             tests.</p>
   * @public
   */
  total?: number | undefined;

  /**
   * <p>When specified, represents only the sum of metered minutes used by the resource to
   *             run tests.</p>
   * @public
   */
  metered?: number | undefined;

  /**
   * <p>When specified, represents only the sum of unmetered minutes used by the resource
   *             to run tests.</p>
   * @public
   */
  unmetered?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionResult = {
  ERRORED: "ERRORED",
  FAILED: "FAILED",
  PASSED: "PASSED",
  PENDING: "PENDING",
  SKIPPED: "SKIPPED",
  STOPPED: "STOPPED",
  WARNED: "WARNED",
} as const;

/**
 * @public
 */
export type ExecutionResult = (typeof ExecutionResult)[keyof typeof ExecutionResult];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "COMPLETED",
  PENDING: "PENDING",
  PENDING_CONCURRNECY: "PENDING_CONCURRENCY",
  PENDING_DEVICE: "PENDING_DEVICE",
  PREPARING: "PREPARING",
  PROCESSING: "PROCESSING",
  RUNNING: "RUNNING",
  SCHEDULING: "SCHEDULING",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * <p>Represents information about the remote access session.</p>
 * @public
 */
export interface RemoteAccessSession {
  /**
   * <p>The Amazon Resource Name (ARN) of the remote access session.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the remote access session.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The date and time the remote access session was created.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The status of the remote access session. Can be any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE.</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING.</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING.</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING.</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING.</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ExecutionStatus | undefined;

  /**
   * <p>The result of the remote access session. Can be any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING.</p>
   *             </li>
   *             <li>
   *                 <p>PASSED.</p>
   *             </li>
   *             <li>
   *                 <p>WARNED.</p>
   *             </li>
   *             <li>
   *                 <p>FAILED.</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED.</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED.</p>
   *             </li>
   *          </ul>
   * @public
   */
  result?: ExecutionResult | undefined;

  /**
   * <p>A message about the remote access session.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The date and time the remote access session was started.</p>
   * @public
   */
  started?: Date | undefined;

  /**
   * <p>The date and time the remote access session was stopped.</p>
   * @public
   */
  stopped?: Date | undefined;

  /**
   * <p>The device (phone or tablet) used in the remote access session.</p>
   * @public
   */
  device?: Device | undefined;

  /**
   * <p>The ARN of the instance.</p>
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * <p>This flag is set to <code>true</code> if remote debugging is enabled for the remote
   *             access session.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</p>
   * @public
   */
  remoteDebugEnabled?: boolean | undefined;

  /**
   * <p>This flag is set to <code>true</code> if remote recording is enabled for the remote
   *             access session.</p>
   * @public
   */
  remoteRecordEnabled?: boolean | undefined;

  /**
   * <p>The ARN for the app to be recorded in the remote access session.</p>
   * @public
   */
  remoteRecordAppArn?: string | undefined;

  /**
   * <p>IP address of the EC2 host where you need to connect to remotely debug devices.
   *             Only returned if remote debugging is enabled for the remote access session.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</p>
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * <p>Unique identifier of your client for the remote access session. Only returned if
   *             remote debugging is enabled for the remote access session.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The billing method of the remote access session. Possible values include <code>METERED</code> or
   *                 <code>UNMETERED</code>. For more information about metered devices, see <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/welcome.html#welcome-terminology">AWS Device Farm
   *                 terminology</a>.</p>
   * @public
   */
  billingMethod?: BillingMethod | undefined;

  /**
   * <p>The number of minutes a device is used in a remote access session (including setup
   *             and teardown minutes).</p>
   * @public
   */
  deviceMinutes?: DeviceMinutes | undefined;

  /**
   * <p>The endpoint for the remote access sesssion.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>Unique device identifier for the remote device. Only returned if remote debugging
   *             is enabled for the remote access session.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</p>
   * @public
   */
  deviceUdid?: string | undefined;

  /**
   * <p>The interaction mode of the remote access session. Valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and
   *                     rotating the screen. You cannot run XCUITest framework-based tests in this
   *                     mode.</p>
   *             </li>
   *             <li>
   *                 <p>NO_VIDEO: You are connected to the device, but cannot interact with it or view the screen. This
   *                     mode has the fastest test execution speed. You can run XCUITest framework-based tests in this
   *                     mode.</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO_ONLY: You can view the screen, but cannot touch or rotate it. You can run XCUITest
   *                     framework-based tests and watch the screen in this mode.</p>
   *             </li>
   *          </ul>
   * @public
   */
  interactionMode?: InteractionMode | undefined;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public
   *             devices, Device Farm always signs your apps again.</p>
   *         <p>For more information about how Device Farm re-signs your apps, see <a href="http://aws.amazon.com/device-farm/faqs/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   * @public
   */
  skipAppResign?: boolean | undefined;

  /**
   * <p>The VPC security groups and subnets that are attached to a project.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The device proxy configured for the remote access session.</p>
   * @public
   */
  deviceProxy?: DeviceProxy | undefined;
}

/**
 * <p>Represents the server response from a request to create a remote access
 *             session.</p>
 * @public
 */
export interface CreateRemoteAccessSessionResult {
  /**
   * <p>A container that describes the remote access session when the request to create a
   *             remote access session is sent.</p>
   * @public
   */
  remoteAccessSession?: RemoteAccessSession | undefined;
}

/**
 * <p>The VPC security groups and subnets that are attached to a project.</p>
 * @public
 */
export interface TestGridVpcConfig {
  /**
   * <p>A list of VPC security group IDs in your Amazon VPC.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>A list of VPC subnet IDs in your Amazon VPC.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The ID of the Amazon VPC.</p>
   * @public
   */
  vpcId: string | undefined;
}

/**
 * @public
 */
export interface CreateTestGridProjectRequest {
  /**
   * <p>Human-readable name of the Selenium testing project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Human-readable description of the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The VPC security groups and subnets that are attached to a project.</p>
   * @public
   */
  vpcConfig?: TestGridVpcConfig | undefined;
}

/**
 * <p>A Selenium testing project. Projects are used to collect and collate sessions.</p>
 * @public
 */
export interface TestGridProject {
  /**
   * <p>The ARN for the project.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>A human-readable name for the project.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A human-readable description for the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The VPC security groups and subnets that are attached to a project.</p>
   * @public
   */
  vpcConfig?: TestGridVpcConfig | undefined;

  /**
   * <p>When the project was created.</p>
   * @public
   */
  created?: Date | undefined;
}

/**
 * @public
 */
export interface CreateTestGridProjectResult {
  /**
   * <p>ARN of the Selenium testing project that was created.</p>
   * @public
   */
  testGridProject?: TestGridProject | undefined;
}

/**
 * <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
  }
}

/**
 * @public
 */
export interface CreateTestGridUrlRequest {
  /**
   * <p>ARN (from <a>CreateTestGridProject</a> or <a>ListTestGridProjects</a>) to associate
   *          with the short-term URL. </p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>Lifetime, in seconds, of the URL.</p>
   * @public
   */
  expiresInSeconds: number | undefined;
}

/**
 * @public
 */
export interface CreateTestGridUrlResult {
  /**
   * <p>A signed URL, expiring in <a>CreateTestGridUrlRequest$expiresInSeconds</a> seconds, to be passed
   *          to a <code>RemoteWebDriver</code>. </p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The number of seconds the URL from <a>CreateTestGridUrlResult$url</a> stays active.</p>
   * @public
   */
  expires?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const UploadType = {
  ANDROID_APP: "ANDROID_APP",
  APPIUM_JAVA_JUNIT_TEST_PACKAGE: "APPIUM_JAVA_JUNIT_TEST_PACKAGE",
  APPIUM_JAVA_JUNIT_TEST_SPEC: "APPIUM_JAVA_JUNIT_TEST_SPEC",
  APPIUM_JAVA_TESTNG_TEST_PACKAGE: "APPIUM_JAVA_TESTNG_TEST_PACKAGE",
  APPIUM_JAVA_TESTNG_TEST_SPEC: "APPIUM_JAVA_TESTNG_TEST_SPEC",
  APPIUM_NODE_TEST_PACKAGE: "APPIUM_NODE_TEST_PACKAGE",
  APPIUM_NODE_TEST_SPEC: "APPIUM_NODE_TEST_SPEC",
  APPIUM_PYTHON_TEST_PACKAGE: "APPIUM_PYTHON_TEST_PACKAGE",
  APPIUM_PYTHON_TEST_SPEC: "APPIUM_PYTHON_TEST_SPEC",
  APPIUM_RUBY_TEST_PACKAGE: "APPIUM_RUBY_TEST_PACKAGE",
  APPIUM_RUBY_TEST_SPEC: "APPIUM_RUBY_TEST_SPEC",
  APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE",
  APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC",
  APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE",
  APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC",
  APPIUM_WEB_NODE_TEST_PACKAGE: "APPIUM_WEB_NODE_TEST_PACKAGE",
  APPIUM_WEB_NODE_TEST_SPEC: "APPIUM_WEB_NODE_TEST_SPEC",
  APPIUM_WEB_PYTHON_TEST_PACKAGE: "APPIUM_WEB_PYTHON_TEST_PACKAGE",
  APPIUM_WEB_PYTHON_TEST_SPEC: "APPIUM_WEB_PYTHON_TEST_SPEC",
  APPIUM_WEB_RUBY_TEST_PACKAGE: "APPIUM_WEB_RUBY_TEST_PACKAGE",
  APPIUM_WEB_RUBY_TEST_SPEC: "APPIUM_WEB_RUBY_TEST_SPEC",
  CALABASH_TEST_PACKAGE: "CALABASH_TEST_PACKAGE",
  EXTERNAL_DATA: "EXTERNAL_DATA",
  INSTRUMENTATION_TEST_PACKAGE: "INSTRUMENTATION_TEST_PACKAGE",
  INSTRUMENTATION_TEST_SPEC: "INSTRUMENTATION_TEST_SPEC",
  IOS_APP: "IOS_APP",
  UIAUTOMATION_TEST_PACKAGE: "UIAUTOMATION_TEST_PACKAGE",
  UIAUTOMATOR_TEST_PACKAGE: "UIAUTOMATOR_TEST_PACKAGE",
  WEB_APP: "WEB_APP",
  XCTEST_TEST_PACKAGE: "XCTEST_TEST_PACKAGE",
  XCTEST_UI_TEST_PACKAGE: "XCTEST_UI_TEST_PACKAGE",
  XCTEST_UI_TEST_SPEC: "XCTEST_UI_TEST_SPEC",
} as const;

/**
 * @public
 */
export type UploadType = (typeof UploadType)[keyof typeof UploadType];

/**
 * <p>Represents a request to the create upload operation.</p>
 * @public
 */
export interface CreateUploadRequest {
  /**
   * <p>The ARN of the project for the upload.</p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>The upload's file name. The name should not contain any forward slashes (<code>/</code>). If you are
   *             uploading an iOS app, the file name must end with the <code>.ipa</code> extension. If you are uploading an
   *             Android app, the file name must end with the <code>.apk</code> extension. For all others, the file name must
   *             end with the <code>.zip</code> file extension.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The upload's upload type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID_APP</p>
   *             </li>
   *             <li>
   *                 <p>IOS_APP</p>
   *             </li>
   *             <li>
   *                 <p>WEB_APP</p>
   *             </li>
   *             <li>
   *                 <p>EXTERNAL_DATA</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_SPEC</p>
   *             </li>
   *          </ul>
   *         <p> If you call <code>CreateUpload</code> with <code>WEB_APP</code> specified, AWS
   *             Device Farm throws an <code>ArgumentException</code> error.</p>
   * @public
   */
  type: UploadType | undefined;

  /**
   * <p>The upload's content type (for example, <code>application/octet-stream</code>).</p>
   * @public
   */
  contentType?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UploadCategory = {
  CURATED: "CURATED",
  PRIVATE: "PRIVATE",
} as const;

/**
 * @public
 */
export type UploadCategory = (typeof UploadCategory)[keyof typeof UploadCategory];

/**
 * @public
 * @enum
 */
export const UploadStatus = {
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus];

/**
 * <p>An app or a set of one or more tests to upload or that have been
 *             uploaded.</p>
 * @public
 */
export interface Upload {
  /**
   * <p>The upload's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The upload's file name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>When the upload was created.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The upload's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID_APP</p>
   *             </li>
   *             <li>
   *                 <p>IOS_APP</p>
   *             </li>
   *             <li>
   *                 <p>WEB_APP</p>
   *             </li>
   *             <li>
   *                 <p>EXTERNAL_DATA</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_SPEC</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: UploadType | undefined;

  /**
   * <p>The upload's status.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>INITIALIZED</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING</p>
   *             </li>
   *             <li>
   *                 <p>SUCCEEDED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: UploadStatus | undefined;

  /**
   * <p>The presigned Amazon S3 URL that was used to store a file using a PUT request.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The upload's metadata. For example, for Android, this contains information that is
   *             parsed from the manifest and is displayed in the AWS Device Farm console after the
   *             associated app is uploaded.</p>
   * @public
   */
  metadata?: string | undefined;

  /**
   * <p>The upload's content type (for example, <code>application/octet-stream</code>).</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>A message about the upload's result.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The upload's category. Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>CURATED: An upload managed by AWS Device Farm.</p>
   *             </li>
   *             <li>
   *                 <p>PRIVATE: An upload managed by the AWS Device Farm customer.</p>
   *             </li>
   *          </ul>
   * @public
   */
  category?: UploadCategory | undefined;
}

/**
 * <p>Represents the result of a create upload request.</p>
 * @public
 */
export interface CreateUploadResult {
  /**
   * <p>The newly created upload.</p>
   * @public
   */
  upload?: Upload | undefined;
}

/**
 * @public
 */
export interface CreateVPCEConfigurationRequest {
  /**
   * <p>The friendly name you give to your VPC endpoint configuration, to manage your
   *             configurations more easily.</p>
   * @public
   */
  vpceConfigurationName: string | undefined;

  /**
   * <p>The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.</p>
   * @public
   */
  vpceServiceName: string | undefined;

  /**
   * <p>The DNS name of the service running in your VPC that you want Device Farm to
   *             test.</p>
   * @public
   */
  serviceDnsName: string | undefined;

  /**
   * <p>An optional description that provides details about your VPC endpoint configuration.</p>
   * @public
   */
  vpceConfigurationDescription?: string | undefined;
}

/**
 * <p>Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
 * @public
 */
export interface VPCEConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The friendly name you give to your VPC endpoint configuration to manage your configurations more
   *             easily.</p>
   * @public
   */
  vpceConfigurationName?: string | undefined;

  /**
   * <p>The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.</p>
   * @public
   */
  vpceServiceName?: string | undefined;

  /**
   * <p>The DNS name that maps to the private IP address of the service you want to
   *             access.</p>
   * @public
   */
  serviceDnsName?: string | undefined;

  /**
   * <p>An optional description that provides details about your VPC endpoint configuration.</p>
   * @public
   */
  vpceConfigurationDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateVPCEConfigurationResult {
  /**
   * <p>An object that contains information about your VPC endpoint configuration.</p>
   * @public
   */
  vpceConfiguration?: VPCEConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  USD: "USD",
} as const;

/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * <p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the
 *             device or in the test environment, are pulled from.</p>
 *         <p>Specify <code>deviceHostPaths</code> and optionally specify either
 *                 <code>iosPaths</code> or <code>androidPaths</code>.</p>
 *         <p>For web app tests, you can specify both <code>iosPaths</code> and
 *                 <code>androidPaths</code>.</p>
 * @public
 */
export interface CustomerArtifactPaths {
  /**
   * <p>Comma-separated list of paths on the iOS device where the artifacts generated by the customer's tests
   *             are pulled from.</p>
   * @public
   */
  iosPaths?: string[] | undefined;

  /**
   * <p>Comma-separated list of paths on the Android device where the artifacts generated by the customer's
   *             tests are pulled from.</p>
   * @public
   */
  androidPaths?: string[] | undefined;

  /**
   * <p>Comma-separated list of paths in the test execution environment where the artifacts generated by the
   *             customer's tests are pulled from.</p>
   * @public
   */
  deviceHostPaths?: string[] | undefined;
}

/**
 * <p>Represents a request to the delete device pool operation.</p>
 * @public
 */
export interface DeleteDevicePoolRequest {
  /**
   * <p>Represents the Amazon Resource Name (ARN) of the Device Farm device pool to delete.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the result of a delete device pool request.</p>
 * @public
 */
export interface DeleteDevicePoolResult {}

/**
 * @public
 */
export interface DeleteInstanceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile you are requesting to
   *             delete.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceProfileResult {}

/**
 * @public
 */
export interface DeleteNetworkProfileRequest {
  /**
   * <p>The ARN of the network profile to delete.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkProfileResult {}

/**
 * <p>Represents a request to the delete project operation.</p>
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * <p>Represents the Amazon Resource Name (ARN) of the Device Farm project to delete.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the result of a delete project request.</p>
 * @public
 */
export interface DeleteProjectResult {}

/**
 * <p>Represents the request to delete the specified remote access session.</p>
 * @public
 */
export interface DeleteRemoteAccessSessionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the session for which you want to delete remote
   *             access.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>The response from the server when a request is made to delete the remote access
 *             session.</p>
 * @public
 */
export interface DeleteRemoteAccessSessionResult {}

/**
 * <p>Represents a request to the delete run operation.</p>
 * @public
 */
export interface DeleteRunRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the run to delete.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the result of a delete run request.</p>
 * @public
 */
export interface DeleteRunResult {}

/**
 * @public
 */
export interface DeleteTestGridProjectRequest {
  /**
   * <p>The ARN of the project to delete, from <a>CreateTestGridProject</a> or <a>ListTestGridProjects</a>.</p>
   * @public
   */
  projectArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTestGridProjectResult {}

/**
 * <p>Represents a request to the delete upload operation.</p>
 * @public
 */
export interface DeleteUploadRequest {
  /**
   * <p>Represents the Amazon Resource Name (ARN) of the Device Farm upload to delete.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the result of a delete upload request.</p>
 * @public
 */
export interface DeleteUploadResult {}

/**
 * @public
 */
export interface DeleteVPCEConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to
   *             delete.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVPCEConfigurationResult {}

/**
 * <p>There was an error with the update request, or you do not have sufficient permissions
 *             to update this VPC endpoint configuration.</p>
 * @public
 */
export class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException" = "InvalidOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
  }
}

/**
 * <p>Represents the request sent to retrieve the account settings.</p>
 * @public
 */
export interface GetAccountSettingsRequest {}

/**
 * <p>Represents the account settings return values from the
 *                 <code>GetAccountSettings</code> request.</p>
 * @public
 */
export interface GetAccountSettingsResult {
  /**
   * <p>The account settings.</p>
   * @public
   */
  accountSettings?: AccountSettings | undefined;
}

/**
 * <p>Represents a request to the get device request.</p>
 * @public
 */
export interface GetDeviceRequest {
  /**
   * <p>The device type's ARN.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the result of a get device request.</p>
 * @public
 */
export interface GetDeviceResult {
  /**
   * <p>An object that contains information about the requested device.</p>
   * @public
   */
  device?: Device | undefined;
}

/**
 * @public
 */
export interface GetDeviceInstanceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance you're requesting information
   *             about.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceInstanceResult {
  /**
   * <p>An object that contains information about your device instance.</p>
   * @public
   */
  deviceInstance?: DeviceInstance | undefined;
}

/**
 * <p>Represents a request to the get device pool operation.</p>
 * @public
 */
export interface GetDevicePoolRequest {
  /**
   * <p>The device pool's ARN.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the result of a get device pool request.</p>
 * @public
 */
export interface GetDevicePoolResult {
  /**
   * <p>An object that contains information about the requested device pool.</p>
   * @public
   */
  devicePool?: DevicePool | undefined;
}

/**
 * <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for
 *             example, 47.6204, -122.3491).</p>
 *         <p>Elevation is currently not supported.</p>
 * @public
 */
export interface Location {
  /**
   * <p>The latitude.</p>
   * @public
   */
  latitude: number | undefined;

  /**
   * <p>The longitude.</p>
   * @public
   */
  longitude: number | undefined;
}

/**
 * <p>Represents the set of radios and their states on a device. Examples of radios
 *             include Wi-Fi, GPS, Bluetooth, and NFC.</p>
 * @public
 */
export interface Radios {
  /**
   * <p>True if Wi-Fi is enabled at the beginning of the test. Otherwise, false.</p>
   * @public
   */
  wifi?: boolean | undefined;

  /**
   * <p>True if Bluetooth is enabled at the beginning of the test. Otherwise, false.</p>
   * @public
   */
  bluetooth?: boolean | undefined;

  /**
   * <p>True if NFC is enabled at the beginning of the test. Otherwise, false.</p>
   * @public
   */
  nfc?: boolean | undefined;

  /**
   * <p>True if GPS is enabled at the beginning of the test. Otherwise, false.</p>
   * @public
   */
  gps?: boolean | undefined;
}

/**
 * <p>Represents the settings for a run. Includes things like location, radio states,
 *             auxiliary apps, and network profiles.</p>
 * @public
 */
export interface ScheduleRunConfiguration {
  /**
   * <p>The ARN of the extra data for the run. The extra data is a .zip file that AWS Device Farm extracts to
   *             external data for Android or the app's sandbox for iOS.</p>
   * @public
   */
  extraDataPackageArn?: string | undefined;

  /**
   * <p>Reserved for internal use.</p>
   * @public
   */
  networkProfileArn?: string | undefined;

  /**
   * <p>Information about the locale that is used for the run.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>Information about the location that is used for the run.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>An array of ARNs for your VPC endpoint configurations.</p>
   * @public
   */
  vpceConfigurationArns?: string[] | undefined;

  /**
   * <p>The device proxy to be configured on the device for the run.</p>
   * @public
   */
  deviceProxy?: DeviceProxy | undefined;

  /**
   * <p>Input <code>CustomerArtifactPaths</code> object for the scheduled run
   *             configuration.</p>
   * @public
   */
  customerArtifactPaths?: CustomerArtifactPaths | undefined;

  /**
   * <p>Information about the radio states for the run.</p>
   * @public
   */
  radios?: Radios | undefined;

  /**
   * <p>A list of upload ARNs for app packages to be installed with your app.</p>
   * @public
   */
  auxiliaryApps?: string[] | undefined;

  /**
   * <p>Specifies the billing method for a test run: <code>metered</code> or
   *                 <code>unmetered</code>. If the parameter is not specified, the default value is
   *                 <code>metered</code>.</p>
   *         <note>
   *             <p>If you have purchased unmetered device slots, you must set this parameter to <code>unmetered</code> to
   *                 make use of them. Otherwise, your run counts against your metered time.</p>
   *         </note>
   * @public
   */
  billingMethod?: BillingMethod | undefined;
}

/**
 * @public
 * @enum
 */
export const TestType = {
  APPIUM_JAVA_JUNIT: "APPIUM_JAVA_JUNIT",
  APPIUM_JAVA_TESTNG: "APPIUM_JAVA_TESTNG",
  APPIUM_NODE: "APPIUM_NODE",
  APPIUM_PYTHON: "APPIUM_PYTHON",
  APPIUM_RUBY: "APPIUM_RUBY",
  APPIUM_WEB_JAVA_JUNIT: "APPIUM_WEB_JAVA_JUNIT",
  APPIUM_WEB_JAVA_TESTNG: "APPIUM_WEB_JAVA_TESTNG",
  APPIUM_WEB_NODE: "APPIUM_WEB_NODE",
  APPIUM_WEB_PYTHON: "APPIUM_WEB_PYTHON",
  APPIUM_WEB_RUBY: "APPIUM_WEB_RUBY",
  BUILTIN_FUZZ: "BUILTIN_FUZZ",
  INSTRUMENTATION: "INSTRUMENTATION",
  XCTEST: "XCTEST",
  XCTEST_UI: "XCTEST_UI",
} as const;

/**
 * @public
 */
export type TestType = (typeof TestType)[keyof typeof TestType];

/**
 * <p>Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an
 *             example of the JSON request syntax, see <a>ScheduleRun</a>.</p>
 * @public
 */
export interface ScheduleRunTest {
  /**
   * <p>The test's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: TestType | undefined;

  /**
   * <p>The ARN of the uploaded test to be run.</p>
   * @public
   */
  testPackageArn?: string | undefined;

  /**
   * <p>The ARN of the YAML-formatted test specification.</p>
   * @public
   */
  testSpecArn?: string | undefined;

  /**
   * <p>The test's filter.</p>
   * @public
   */
  filter?: string | undefined;

  /**
   * <p>The test's parameters, such as test framework parameters and fixture settings.
   *             Parameters are represented by name-value pairs of strings.</p>
   *         <p>For all tests:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>app_performance_monitoring</code>: Performance monitoring is enabled by default.
   *                     Set this parameter to false to disable it.</p>
   *             </li>
   *          </ul>
   *
   *         <p>For Appium tests (all types):</p>
   *         <ul>
   *             <li>
   *                 <p>appium_version: The Appium version. Currently supported values are 1.6.5
   *                     (and later), latest, and default.</p>
   *                 <ul>
   *                   <li>
   *
   *                         <p>latest runs the latest Appium version supported by Device
   *                             Farm (1.9.1).</p>
   *                     </li>
   *                   <li>
   *                         <p>For default, Device Farm selects a compatible version of
   *                             Appium for the device. The current behavior is to run 1.7.2 on Android
   *                             devices and iOS 9 and earlier and 1.7.2 for iOS 10 and later.</p>
   *                     </li>
   *                   <li>
   *                         <p>This behavior is subject to change.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p>For fuzz tests (Android only):</p>
   *         <ul>
   *             <li>
   *                 <p>event_count: The number of events, between 1 and 10000, that the UI fuzz
   *                     test should perform.</p>
   *             </li>
   *             <li>
   *                 <p>throttle: The time, in ms, between 0 and 1000, that the UI fuzz test should
   *                     wait between events.</p>
   *             </li>
   *             <li>
   *                 <p>seed: A seed to use for randomizing the UI fuzz test. Using the same seed
   *                     value between tests ensures identical event sequences.</p>
   *             </li>
   *          </ul>
   *
   *         <p>For Instrumentation:</p>
   *         <ul>
   *             <li>
   *                 <p>filter: A test filter string. Examples:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Running a single test case: <code>com.android.abc.Test1</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running a single test: <code>com.android.abc.Test1#smoke</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running multiple tests:
   *                             <code>com.android.abc.Test1,com.android.abc.Test2</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p>For XCTest and XCTestUI:</p>
   *         <ul>
   *             <li>
   *                 <p>filter: A test filter string. Examples:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Running a single test class: <code>LoginTests</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running a multiple test classes: <code>LoginTests,SmokeTests</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running a single test: <code>LoginTests/testValid</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running multiple tests:
   *                             <code>LoginTests/testValid,LoginTests/testInvalid</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * <p>Represents a request to the get device pool compatibility operation.</p>
 * @public
 */
export interface GetDevicePoolCompatibilityRequest {
  /**
   * <p>The device pool's ARN.</p>
   * @public
   */
  devicePoolArn: string | undefined;

  /**
   * <p>The ARN of the app that is associated with the specified device pool.</p>
   * @public
   */
  appArn?: string | undefined;

  /**
   * <p>The test type for the specified device pool.</p>
   *         <p>Allowed values include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI.</p>
   *             </li>
   *          </ul>
   * @public
   */
  testType?: TestType | undefined;

  /**
   * <p>Information about the uploaded test to be run against the device pool.</p>
   * @public
   */
  test?: ScheduleRunTest | undefined;

  /**
   * <p>An object that contains information about the settings for a run.</p>
   * @public
   */
  configuration?: ScheduleRunConfiguration | undefined;
}

/**
 * <p>Represents information about incompatibility.</p>
 * @public
 */
export interface IncompatibilityMessage {
  /**
   * <p>A message about the incompatibility.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The type of incompatibility.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>ARN</p>
   *             </li>
   *             <li>
   *                 <p>FORM_FACTOR (for example, phone or tablet)</p>
   *             </li>
   *             <li>
   *                 <p>MANUFACTURER</p>
   *             </li>
   *             <li>
   *                 <p>PLATFORM (for example, Android or iOS)</p>
   *             </li>
   *             <li>
   *                 <p>REMOTE_ACCESS_ENABLED</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_VERSION</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: DeviceAttribute | undefined;
}

/**
 * <p>Represents a device pool compatibility result.</p>
 * @public
 */
export interface DevicePoolCompatibilityResult {
  /**
   * <p>The device (phone or tablet) to return information about.</p>
   * @public
   */
  device?: Device | undefined;

  /**
   * <p>Whether the result was compatible with the device pool.</p>
   * @public
   */
  compatible?: boolean | undefined;

  /**
   * <p>Information about the compatibility.</p>
   * @public
   */
  incompatibilityMessages?: IncompatibilityMessage[] | undefined;
}

/**
 * <p>Represents the result of describe device pool compatibility request.</p>
 * @public
 */
export interface GetDevicePoolCompatibilityResult {
  /**
   * <p>Information about compatible devices.</p>
   * @public
   */
  compatibleDevices?: DevicePoolCompatibilityResult[] | undefined;

  /**
   * <p>Information about incompatible devices.</p>
   * @public
   */
  incompatibleDevices?: DevicePoolCompatibilityResult[] | undefined;
}

/**
 * @public
 */
export interface GetInstanceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an instance profile.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceProfileResult {
  /**
   * <p>An object that contains information about an instance profile.</p>
   * @public
   */
  instanceProfile?: InstanceProfile | undefined;
}

/**
 * <p>Represents a request to the get job operation.</p>
 * @public
 */
export interface GetJobRequest {
  /**
   * <p>The job's ARN.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents a device.</p>
 * @public
 */
export interface Job {
  /**
   * <p>The job's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The job's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The job's type.</p>
   *         <p>Allowed values include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: TestType | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The job's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ExecutionStatus | undefined;

  /**
   * <p>The job's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   * @public
   */
  result?: ExecutionResult | undefined;

  /**
   * <p>The job's start time.</p>
   * @public
   */
  started?: Date | undefined;

  /**
   * <p>The job's stop time.</p>
   * @public
   */
  stopped?: Date | undefined;

  /**
   * <p>The job's result counters.</p>
   * @public
   */
  counters?: Counters | undefined;

  /**
   * <p>A message about the job's result.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The device (phone or tablet).</p>
   * @public
   */
  device?: Device | undefined;

  /**
   * <p>The ARN of the instance.</p>
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the job.</p>
   * @public
   */
  deviceMinutes?: DeviceMinutes | undefined;

  /**
   * <p>The endpoint for streaming device video.</p>
   * @public
   */
  videoEndpoint?: string | undefined;

  /**
   * <p>This value is set to true if video capture is enabled. Otherwise, it is set to false.</p>
   * @public
   */
  videoCapture?: boolean | undefined;
}

/**
 * <p>Represents the result of a get job request.</p>
 * @public
 */
export interface GetJobResult {
  /**
   * <p>An object that contains information about the requested job.</p>
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface GetNetworkProfileRequest {
  /**
   * <p>The ARN of the network profile to return information about.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkProfileResult {
  /**
   * <p>The network profile.</p>
   * @public
   */
  networkProfile?: NetworkProfile | undefined;
}

/**
 * <p>Represents the request to retrieve the offering status for the specified customer
 *             or account.</p>
 * @public
 */
export interface GetOfferingStatusRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A number that represents the monetary amount for an offering or transaction.</p>
 * @public
 */
export interface MonetaryAmount {
  /**
   * <p>The numerical amount of an offering or transaction.</p>
   * @public
   */
  amount?: number | undefined;

  /**
   * <p>The currency code of a monetary amount. For example, <code>USD</code> means U.S. dollars.</p>
   * @public
   */
  currencyCode?: CurrencyCode | undefined;
}

/**
 * @public
 * @enum
 */
export const RecurringChargeFrequency = {
  MONTHLY: "MONTHLY",
} as const;

/**
 * @public
 */
export type RecurringChargeFrequency = (typeof RecurringChargeFrequency)[keyof typeof RecurringChargeFrequency];

/**
 * <p>Specifies whether charges for devices are recurring.</p>
 * @public
 */
export interface RecurringCharge {
  /**
   * <p>The cost of the recurring charge.</p>
   * @public
   */
  cost?: MonetaryAmount | undefined;

  /**
   * <p>The frequency in which charges recur.</p>
   * @public
   */
  frequency?: RecurringChargeFrequency | undefined;
}

/**
 * @public
 * @enum
 */
export const OfferingType = {
  RECURRING: "RECURRING",
} as const;

/**
 * @public
 */
export type OfferingType = (typeof OfferingType)[keyof typeof OfferingType];

/**
 * <p>Represents the metadata of a device offering.</p>
 * @public
 */
export interface Offering {
  /**
   * <p>The ID that corresponds to a device offering.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A string that describes the offering.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of offering (for example, <code>RECURRING</code>) for a device.</p>
   * @public
   */
  type?: OfferingType | undefined;

  /**
   * <p>The platform of the device (for example, <code>ANDROID</code> or <code>IOS</code>).</p>
   * @public
   */
  platform?: DevicePlatform | undefined;

  /**
   * <p>Specifies whether there are recurring charges for the offering.</p>
   * @public
   */
  recurringCharges?: RecurringCharge[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OfferingTransactionType = {
  PURCHASE: "PURCHASE",
  RENEW: "RENEW",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type OfferingTransactionType = (typeof OfferingTransactionType)[keyof typeof OfferingTransactionType];

/**
 * <p>The status of the offering.</p>
 * @public
 */
export interface OfferingStatus {
  /**
   * <p>The type specified for the offering status.</p>
   * @public
   */
  type?: OfferingTransactionType | undefined;

  /**
   * <p>Represents the metadata of an offering status.</p>
   * @public
   */
  offering?: Offering | undefined;

  /**
   * <p>The number of available devices in the offering.</p>
   * @public
   */
  quantity?: number | undefined;

  /**
   * <p>The date on which the offering is effective.</p>
   * @public
   */
  effectiveOn?: Date | undefined;
}

/**
 * <p>Returns the status result for a device offering.</p>
 * @public
 */
export interface GetOfferingStatusResult {
  /**
   * <p>When specified, gets the offering status for the current period.</p>
   * @public
   */
  current?: Record<string, OfferingStatus> | undefined;

  /**
   * <p>When specified, gets the offering status for the next period.</p>
   * @public
   */
  nextPeriod?: Record<string, OfferingStatus> | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Exception gets thrown when a user is not eligible to perform the specified
 *             transaction.</p>
 * @public
 */
export class NotEligibleException extends __BaseException {
  readonly name: "NotEligibleException" = "NotEligibleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotEligibleException, __BaseException>) {
    super({
      name: "NotEligibleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotEligibleException.prototype);
  }
}

/**
 * <p>Represents a request to the get project operation.</p>
 * @public
 */
export interface GetProjectRequest {
  /**
   * <p>The project's ARN.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the result of a get project request.</p>
 * @public
 */
export interface GetProjectResult {
  /**
   * <p>The project to get information about.</p>
   * @public
   */
  project?: Project | undefined;
}

/**
 * <p>Represents the request to get information about the specified remote access
 *             session.</p>
 * @public
 */
export interface GetRemoteAccessSessionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the remote access session about which you want to
   *             get session information.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the response from the server that lists detailed information about the
 *             remote access session.</p>
 * @public
 */
export interface GetRemoteAccessSessionResult {
  /**
   * <p>A container that lists detailed information about the remote access
   *             session.</p>
   * @public
   */
  remoteAccessSession?: RemoteAccessSession | undefined;
}

/**
 * <p>Represents a request to the get run operation.</p>
 * @public
 */
export interface GetRunRequest {
  /**
   * <p>The run's ARN.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceFilterAttribute = {
  ARN: "ARN",
  AVAILABILITY: "AVAILABILITY",
  FLEET_TYPE: "FLEET_TYPE",
  FORM_FACTOR: "FORM_FACTOR",
  INSTANCE_ARN: "INSTANCE_ARN",
  INSTANCE_LABELS: "INSTANCE_LABELS",
  MANUFACTURER: "MANUFACTURER",
  MODEL: "MODEL",
  OS_VERSION: "OS_VERSION",
  PLATFORM: "PLATFORM",
  REMOTE_ACCESS_ENABLED: "REMOTE_ACCESS_ENABLED",
  REMOTE_DEBUG_ENABLED: "REMOTE_DEBUG_ENABLED",
} as const;

/**
 * @public
 */
export type DeviceFilterAttribute = (typeof DeviceFilterAttribute)[keyof typeof DeviceFilterAttribute];

/**
 * <p>Represents a device filter used to select a set of devices to be included in a test
 *             run. This data structure is passed in as the <code>deviceSelectionConfiguration</code>
 *             parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see
 *                 <a>ScheduleRun</a>.</p>
 *         <p>It is also passed in as the <code>filters</code> parameter to
 *             <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p>
 * @public
 */
export interface DeviceFilter {
  /**
   * <p>The aspect of a device such as platform or model used as the selection criteria in a
   *             device filter.</p>
   *         <p>The supported operators for each attribute are provided in the following list.</p>
   *         <dl>
   *             <dt>ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device (for example,
   *                             <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>).</p>
   *                     <p>Supported operators: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>PLATFORM</dt>
   *             <dd>
   *                     <p>The device platform. Valid values are ANDROID or IOS.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>OS_VERSION</dt>
   *             <dd>
   *                     <p>The operating system version (for example, 10.3.2).</p>
   *                     <p>Supported operators: <code>EQUALS</code>, <code>GREATER_THAN</code>,
   *                             <code>GREATER_THAN_OR_EQUALS</code>, <code>IN</code>,
   *                             <code>LESS_THAN</code>, <code>LESS_THAN_OR_EQUALS</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>MODEL</dt>
   *             <dd>
   *                     <p>The device model (for example, iPad 5th Gen).</p>
   *                     <p>Supported operators: <code>CONTAINS</code>, <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>AVAILABILITY</dt>
   *             <dd>
   *                     <p>The current availability of the device. Valid values are AVAILABLE,
   *                         HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>FORM_FACTOR</dt>
   *             <dd>
   *                     <p>The device form factor. Valid values are PHONE or TABLET.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>MANUFACTURER</dt>
   *             <dd>
   *                     <p>The device manufacturer (for example, Apple).</p>
   *                     <p>Supported operators: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_ACCESS_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote access. Valid values are TRUE or
   *                         FALSE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_DEBUG_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote debugging. Valid values are TRUE or FALSE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                     <p>Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                         longer supported</a>, this filter is ignored.</p>
   *                 </dd>
   *             <dt>INSTANCE_ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device instance.</p>
   *                     <p>Supported operators: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>INSTANCE_LABELS</dt>
   *             <dd>
   *                     <p>The label of the device instance.</p>
   *                     <p>Supported operators: <code>CONTAINS</code>
   *                </p>
   *                 </dd>
   *             <dt>FLEET_TYPE</dt>
   *             <dd>
   *                     <p>The fleet type. Valid values are PUBLIC or PRIVATE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *          </dl>
   * @public
   */
  attribute: DeviceFilterAttribute | undefined;

  /**
   * <p>Specifies how Device Farm compares the filter's attribute to the value. See the attribute
   *             descriptions.</p>
   * @public
   */
  operator: RuleOperator | undefined;

  /**
   * <p>An array of one or more filter values used in a device filter.</p>
   *         <p class="title">
   *             <b>Operator Values</b>
   *          </p>
   *          <ul>
   *             <li>
   *                 <p>The IN and NOT_IN operators can take a values array that has more than one
   *                     element.</p>
   *             </li>
   *             <li>
   *                 <p>The other operators require an array with a single element.</p>
   *             </li>
   *          </ul>
   *         <p class="title">
   *             <b>Attribute Values</b>
   *          </p>
   *          <ul>
   *             <li>
   *                 <p>The PLATFORM attribute can be set to ANDROID or IOS.</p>
   *             </li>
   *             <li>
   *                 <p>The AVAILABILITY attribute can be set to AVAILABLE, HIGHLY_AVAILABLE, BUSY, or
   *                     TEMPORARY_NOT_AVAILABLE.</p>
   *             </li>
   *             <li>
   *                 <p>The FORM_FACTOR attribute can be set to PHONE or TABLET.</p>
   *             </li>
   *             <li>
   *                 <p>The FLEET_TYPE attribute can be set to PUBLIC or PRIVATE.</p>
   *             </li>
   *          </ul>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Contains the run results requested by the device selection configuration and how many devices were
 *             returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.</p>
 * @public
 */
export interface DeviceSelectionResult {
  /**
   * <p>The filters in a device selection result.</p>
   * @public
   */
  filters?: DeviceFilter[] | undefined;

  /**
   * <p>The number of devices that matched the device filter selection criteria.</p>
   * @public
   */
  matchedDevicesCount?: number | undefined;

  /**
   * <p>The maximum number of devices to be selected by a device filter and included in a test
   *             run.</p>
   * @public
   */
  maxDevices?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionResultCode = {
  PARSING_FAILED: "PARSING_FAILED",
  VPC_ENDPOINT_SETUP_FAILED: "VPC_ENDPOINT_SETUP_FAILED",
} as const;

/**
 * @public
 */
export type ExecutionResultCode = (typeof ExecutionResultCode)[keyof typeof ExecutionResultCode];

/**
 * <p>Represents a test run on a set of devices with a given app package, test parameters, and so
 *             on.</p>
 * @public
 */
export interface Run {
  /**
   * <p>The run's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The run's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The run's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: TestType | undefined;

  /**
   * <p>The run's platform.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID</p>
   *             </li>
   *             <li>
   *                 <p>IOS</p>
   *             </li>
   *          </ul>
   * @public
   */
  platform?: DevicePlatform | undefined;

  /**
   * <p>When the run was created.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The run's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ExecutionStatus | undefined;

  /**
   * <p>The run's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   * @public
   */
  result?: ExecutionResult | undefined;

  /**
   * <p>The run's start time.</p>
   * @public
   */
  started?: Date | undefined;

  /**
   * <p>The run's stop time.</p>
   * @public
   */
  stopped?: Date | undefined;

  /**
   * <p>The run's result counters.</p>
   * @public
   */
  counters?: Counters | undefined;

  /**
   * <p>A message about the run's result.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The total number of jobs for the run.</p>
   * @public
   */
  totalJobs?: number | undefined;

  /**
   * <p>The total number of completed jobs.</p>
   * @public
   */
  completedJobs?: number | undefined;

  /**
   * <p>Specifies the billing method for a test run: <code>metered</code> or
   *                 <code>unmetered</code>. If the parameter is not specified, the default value is
   *                 <code>metered</code>.</p>
   *         <note>
   *             <p>If you have unmetered device slots, you must set this to <code>unmetered</code> to use them.
   *                 Otherwise, the run is counted toward metered device minutes.</p>
   *         </note>
   * @public
   */
  billingMethod?: BillingMethod | undefined;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the test run.</p>
   * @public
   */
  deviceMinutes?: DeviceMinutes | undefined;

  /**
   * <p>The network profile being used for a test run.</p>
   * @public
   */
  networkProfile?: NetworkProfile | undefined;

  /**
   * <p>The device proxy configured for the devices in the run.</p>
   * @public
   */
  deviceProxy?: DeviceProxy | undefined;

  /**
   * <p>Read-only URL for an object in an S3 bucket where you can get the parsing results of the test package.
   *             If the test package doesn't parse, the reason why it doesn't parse appears in the file that this URL points
   *             to.</p>
   * @public
   */
  parsingResultUrl?: string | undefined;

  /**
   * <p>Supporting field for the result field. Set only if <code>result</code> is <code>SKIPPED</code>.
   *                 <code>PARSING_FAILED</code> if the result is skipped because of test package parsing failure.</p>
   * @public
   */
  resultCode?: ExecutionResultCode | undefined;

  /**
   * <p>For fuzz tests, this is a seed to use for randomizing the UI fuzz test. Using the same
   *             seed value between tests ensures identical event sequences.</p>
   * @public
   */
  seed?: number | undefined;

  /**
   * <p>An app to upload or that has been uploaded.</p>
   * @public
   */
  appUpload?: string | undefined;

  /**
   * <p>For fuzz tests, this is the number of events, between 1 and 10000, that the UI fuzz
   *             test should perform.</p>
   * @public
   */
  eventCount?: number | undefined;

  /**
   * <p>The number of minutes the job executes before it times out.</p>
   * @public
   */
  jobTimeoutMinutes?: number | undefined;

  /**
   * <p>The ARN of the device pool for the run.</p>
   * @public
   */
  devicePoolArn?: string | undefined;

  /**
   * <p>Information about the locale that is used for the run.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>Information about the radio states for the run.</p>
   * @public
   */
  radios?: Radios | undefined;

  /**
   * <p>Information about the location that is used for the run.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>Output <code>CustomerArtifactPaths</code> object for the test run.</p>
   * @public
   */
  customerArtifactPaths?: CustomerArtifactPaths | undefined;

  /**
   * <p>The Device Farm console URL for the recording of the run.</p>
   * @public
   */
  webUrl?: string | undefined;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public
   *             devices, Device Farm always signs your apps again.</p>
   *         <p>For more information about how Device Farm re-signs your apps, see <a href="http://aws.amazon.com/device-farm/faqs/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   * @public
   */
  skipAppResign?: boolean | undefined;

  /**
   * <p>The ARN of the YAML-formatted test specification for the run.</p>
   * @public
   */
  testSpecArn?: string | undefined;

  /**
   * <p>The results of a device filter used to select the devices for a test run.</p>
   * @public
   */
  deviceSelectionResult?: DeviceSelectionResult | undefined;

  /**
   * <p>The VPC security groups and subnets that are attached to a project.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;
}

/**
 * <p>Represents the result of a get run request.</p>
 * @public
 */
export interface GetRunResult {
  /**
   * <p>The run to get results from.</p>
   * @public
   */
  run?: Run | undefined;
}

/**
 * <p>Represents a request to the get suite operation.</p>
 * @public
 */
export interface GetSuiteRequest {
  /**
   * <p>The suite's ARN.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents a collection of one or more tests.</p>
 * @public
 */
export interface Suite {
  /**
   * <p>The suite's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The suite's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The suite's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: TestType | undefined;

  /**
   * <p>When the suite was created.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The suite's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ExecutionStatus | undefined;

  /**
   * <p>The suite's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   * @public
   */
  result?: ExecutionResult | undefined;

  /**
   * <p>The suite's start time.</p>
   * @public
   */
  started?: Date | undefined;

  /**
   * <p>The suite's stop time.</p>
   * @public
   */
  stopped?: Date | undefined;

  /**
   * <p>The suite's result counters.</p>
   * @public
   */
  counters?: Counters | undefined;

  /**
   * <p>A message about the suite's result.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the test
   *             suite.</p>
   * @public
   */
  deviceMinutes?: DeviceMinutes | undefined;
}

/**
 * <p>Represents the result of a get suite request.</p>
 * @public
 */
export interface GetSuiteResult {
  /**
   * <p>A collection of one or more tests.</p>
   * @public
   */
  suite?: Suite | undefined;
}

/**
 * <p>Represents a request to the get test operation.</p>
 * @public
 */
export interface GetTestRequest {
  /**
   * <p>The test's ARN.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents a condition that is evaluated.</p>
 * @public
 */
export interface Test {
  /**
   * <p>The test's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The test's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The test's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: TestType | undefined;

  /**
   * <p>When the test was created.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The test's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ExecutionStatus | undefined;

  /**
   * <p>The test's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   * @public
   */
  result?: ExecutionResult | undefined;

  /**
   * <p>The test's start time.</p>
   * @public
   */
  started?: Date | undefined;

  /**
   * <p>The test's stop time.</p>
   * @public
   */
  stopped?: Date | undefined;

  /**
   * <p>The test's result counters.</p>
   * @public
   */
  counters?: Counters | undefined;

  /**
   * <p>A message about the test's result.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the test.</p>
   * @public
   */
  deviceMinutes?: DeviceMinutes | undefined;
}

/**
 * <p>Represents the result of a get test request.</p>
 * @public
 */
export interface GetTestResult {
  /**
   * <p>A test condition that is evaluated.</p>
   * @public
   */
  test?: Test | undefined;
}

/**
 * @public
 */
export interface GetTestGridProjectRequest {
  /**
   * <p>The ARN of the Selenium testing project, from either <a>CreateTestGridProject</a> or <a>ListTestGridProjects</a>.</p>
   * @public
   */
  projectArn: string | undefined;
}

/**
 * @public
 */
export interface GetTestGridProjectResult {
  /**
   * <p>A <a>TestGridProject</a>.</p>
   * @public
   */
  testGridProject?: TestGridProject | undefined;
}

/**
 * @public
 */
export interface GetTestGridSessionRequest {
  /**
   * <p>The ARN for the project that this session belongs to. See <a>CreateTestGridProject</a> and <a>ListTestGridProjects</a>.</p>
   * @public
   */
  projectArn?: string | undefined;

  /**
   * <p>An ID associated with this session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a <a>TestGridSession</a>.</p>
   * @public
   */
  sessionArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TestGridSessionStatus = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
  ERRORED: "ERRORED",
} as const;

/**
 * @public
 */
export type TestGridSessionStatus = (typeof TestGridSessionStatus)[keyof typeof TestGridSessionStatus];

/**
 * <p>A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a
 *          call to <a>CreateTestGridUrl</a>.</p>
 * @public
 */
export interface TestGridSession {
  /**
   * <p>The ARN of the session.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The state of the session.</p>
   * @public
   */
  status?: TestGridSessionStatus | undefined;

  /**
   * <p>The time that the session was started.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The time the session ended.</p>
   * @public
   */
  ended?: Date | undefined;

  /**
   * <p>The number of billed minutes that were used for this session. </p>
   * @public
   */
  billingMinutes?: number | undefined;

  /**
   * <p>A JSON object of options and parameters passed to the Selenium WebDriver.</p>
   * @public
   */
  seleniumProperties?: string | undefined;
}

/**
 * @public
 */
export interface GetTestGridSessionResult {
  /**
   * <p>The <a>TestGridSession</a> that was requested.</p>
   * @public
   */
  testGridSession?: TestGridSession | undefined;
}

/**
 * <p>Represents a request to the get upload operation.</p>
 * @public
 */
export interface GetUploadRequest {
  /**
   * <p>The upload's ARN.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the result of a get upload request.</p>
 * @public
 */
export interface GetUploadResult {
  /**
   * <p>An app or a set of one or more tests to upload or that have been
   *             uploaded.</p>
   * @public
   */
  upload?: Upload | undefined;
}

/**
 * @public
 */
export interface GetVPCEConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to
   *             describe.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetVPCEConfigurationResult {
  /**
   * <p>An object that contains information about your VPC endpoint configuration.</p>
   * @public
   */
  vpceConfiguration?: VPCEConfiguration | undefined;
}

/**
 * <p>Represents the request to install an Android application (in .apk format) or an iOS
 *             application (in .ipa format) as part of a remote access session.</p>
 * @public
 */
export interface InstallToRemoteAccessSessionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the remote access session about which you are
   *             requesting information.</p>
   * @public
   */
  remoteAccessSessionArn: string | undefined;

  /**
   * <p>The ARN of the app about which you are requesting information.</p>
   * @public
   */
  appArn: string | undefined;
}

/**
 * <p>Represents the response from the server after AWS Device Farm makes a request to
 *             install to a remote access session.</p>
 * @public
 */
export interface InstallToRemoteAccessSessionResult {
  /**
   * <p>An app to upload or that has been uploaded.</p>
   * @public
   */
  appUpload?: Upload | undefined;
}

/**
 * <p>Represents a request to the list artifacts operation.</p>
 * @public
 */
export interface ListArtifactsRequest {
  /**
   * <p>The run, job, suite, or test ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The artifacts' type.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>FILE</p>
   *             </li>
   *             <li>
   *                 <p>LOG</p>
   *             </li>
   *             <li>
   *                 <p>SCREENSHOT</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: ArtifactCategory | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the result of a list artifacts operation.</p>
 * @public
 */
export interface ListArtifactsResult {
  /**
   * <p>Information about the artifacts.</p>
   * @public
   */
  artifacts?: Artifact[] | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceInstancesRequest {
  /**
   * <p>An integer that specifies the maximum number of items you want to return in the API response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceInstancesResult {
  /**
   * <p>An object that contains information about your device instances.</p>
   * @public
   */
  deviceInstances?: DeviceInstance[] | undefined;

  /**
   * <p>An identifier that can be used in the next call to this operation to return the next
   *             set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the result of a list device pools request.</p>
 * @public
 */
export interface ListDevicePoolsRequest {
  /**
   * <p>The project ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The device pools' type.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>CURATED: A device pool that is created and managed by AWS Device
   *                     Farm.</p>
   *             </li>
   *             <li>
   *                 <p>PRIVATE: A device pool that is created and managed by the device pool
   *                     developer.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: DevicePoolType | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the result of a list device pools request.</p>
 * @public
 */
export interface ListDevicePoolsResult {
  /**
   * <p>Information about the device pools.</p>
   * @public
   */
  devicePools?: DevicePool[] | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the result of a list devices request.</p>
 * @public
 */
export interface ListDevicesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Used to select a set of devices. A filter is made up of an attribute, an operator, and
   *             one or more values.</p>
   *         <ul>
   *             <li>
   *                 <p>Attribute: The aspect of a device such as platform or model used as the
   *                     selection criteria in a device filter.</p>
   *                 <p>Allowed values include:</p>
   *                 <ul>
   *                   <li>
   *                         <p>ARN: The Amazon Resource Name (ARN) of the device (for example,
   *                                 <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>).</p>
   *                     </li>
   *                   <li>
   *                         <p>PLATFORM: The device platform. Valid values are ANDROID or IOS.</p>
   *                     </li>
   *                   <li>
   *                         <p>OS_VERSION: The operating system version (for example, 10.3.2).</p>
   *                     </li>
   *                   <li>
   *                         <p>MODEL: The device model (for example, iPad 5th Gen).</p>
   *                     </li>
   *                   <li>
   *                         <p>AVAILABILITY: The current availability of the device. Valid values are AVAILABLE,
   *                             HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p>
   *                     </li>
   *                   <li>
   *                         <p>FORM_FACTOR: The device form factor. Valid values are PHONE or TABLET.</p>
   *                     </li>
   *                   <li>
   *                         <p>MANUFACTURER: The device manufacturer (for example, Apple).</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access. Valid values
   *                             are TRUE or FALSE.</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_DEBUG_ENABLED: Whether the device is enabled for remote debugging. Valid values
   *                             are TRUE or FALSE. Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                                 longer supported</a>, this attribute is ignored.</p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_ARN: The Amazon Resource Name (ARN) of the device
   *                             instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_LABELS: The label of the device instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>FLEET_TYPE: The fleet type. Valid values are PUBLIC or PRIVATE.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Operator: The filter operator.</p>
   *                 <ul>
   *                   <li>
   *                         <p>The EQUALS operator is available for every attribute except
   *                             INSTANCE_LABELS.</p>
   *                     </li>
   *                   <li>
   *                         <p>The CONTAINS operator is available for the INSTANCE_LABELS and MODEL
   *                             attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The IN and NOT_IN operators are available for the ARN, OS_VERSION,
   *                             MODEL, MANUFACTURER, and INSTANCE_ARN attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUALS, and
   *                             GREATER_THAN_OR_EQUALS operators are also available for the OS_VERSION
   *                             attribute.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Values: An array of one or more filter values.</p>
   *                 <ul>
   *                   <li>
   *                         <p>The IN and NOT_IN operators take a values array that has one or more
   *                             elements.</p>
   *                     </li>
   *                   <li>
   *                         <p>The other operators require an array with a single element.</p>
   *                     </li>
   *                   <li>
   *                         <p>In a request, the AVAILABILITY attribute takes the following values: AVAILABLE,
   *                             HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: DeviceFilter[] | undefined;
}

/**
 * <p>Represents the result of a list devices operation.</p>
 * @public
 */
export interface ListDevicesResult {
  /**
   * <p>Information about the devices.</p>
   * @public
   */
  devices?: Device[] | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceProfilesRequest {
  /**
   * <p>An integer that specifies the maximum number of items you want to return in the API response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceProfilesResult {
  /**
   * <p>An object that contains information about your instance profiles.</p>
   * @public
   */
  instanceProfiles?: InstanceProfile[] | undefined;

  /**
   * <p>An identifier that can be used in the next call to this operation to return the next
   *             set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a request to the list jobs operation.</p>
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>The run's Amazon Resource Name (ARN).</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the result of a list jobs request.</p>
 * @public
 */
export interface ListJobsResult {
  /**
   * <p>Information about the jobs.</p>
   * @public
   */
  jobs?: Job[] | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkProfilesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to list network
   *             profiles.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The type of network profile to return information about. Valid values are listed here.</p>
   * @public
   */
  type?: NetworkProfileType | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkProfilesResult {
  /**
   * <p>A list of the available network profiles.</p>
   * @public
   */
  networkProfiles?: NetworkProfile[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOfferingPromotionsRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents information about an offering promotion.</p>
 * @public
 */
export interface OfferingPromotion {
  /**
   * <p>The ID of the offering promotion.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A string that describes the offering promotion.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListOfferingPromotionsResult {
  /**
   * <p>Information about the offering promotions.</p>
   * @public
   */
  offeringPromotions?: OfferingPromotion[] | undefined;

  /**
   * <p>An identifier to be used in the next call to this operation, to return the next set
   *             of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the request to list all offerings.</p>
 * @public
 */
export interface ListOfferingsRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the return values of the list of offerings.</p>
 * @public
 */
export interface ListOfferingsResult {
  /**
   * <p>A value that represents the list offering results.</p>
   * @public
   */
  offerings?: Offering[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the request to list the offering transaction history.</p>
 * @public
 */
export interface ListOfferingTransactionsRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the metadata of an offering transaction.</p>
 * @public
 */
export interface OfferingTransaction {
  /**
   * <p>The status of an offering transaction.</p>
   * @public
   */
  offeringStatus?: OfferingStatus | undefined;

  /**
   * <p>The transaction ID of the offering transaction.</p>
   * @public
   */
  transactionId?: string | undefined;

  /**
   * <p>The ID that corresponds to a device offering promotion.</p>
   * @public
   */
  offeringPromotionId?: string | undefined;

  /**
   * <p>The date on which an offering transaction was created.</p>
   * @public
   */
  createdOn?: Date | undefined;

  /**
   * <p>The cost of an offering transaction.</p>
   * @public
   */
  cost?: MonetaryAmount | undefined;
}

/**
 * <p>Returns the transaction log of the specified offerings.</p>
 * @public
 */
export interface ListOfferingTransactionsResult {
  /**
   * <p>The audit log of subscriptions you have purchased and modified through AWS Device
   *             Farm.</p>
   * @public
   */
  offeringTransactions?: OfferingTransaction[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a request to the list projects operation.</p>
 * @public
 */
export interface ListProjectsRequest {
  /**
   * <p>Optional. If no Amazon Resource Name (ARN) is specified, then AWS Device Farm
   *             returns a list of all projects for the AWS account. You can also specify a project
   *             ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the result of a list projects request.</p>
 * @public
 */
export interface ListProjectsResult {
  /**
   * <p>Information about the projects.</p>
   * @public
   */
  projects?: Project[] | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the request to return information about the remote access
 *             session.</p>
 * @public
 */
export interface ListRemoteAccessSessionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project about which you are requesting
   *             information.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the response from the server after AWS Device Farm makes a request to
 *             return information about the remote access session.</p>
 * @public
 */
export interface ListRemoteAccessSessionsResult {
  /**
   * <p>A container that represents the metadata from the service about each remote access session you are
   *             requesting.</p>
   * @public
   */
  remoteAccessSessions?: RemoteAccessSession[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a request to the list runs operation.</p>
 * @public
 */
export interface ListRunsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to list
   *             runs.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the result of a list runs request.</p>
 * @public
 */
export interface ListRunsResult {
  /**
   * <p>Information about the runs.</p>
   * @public
   */
  runs?: Run[] | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a request to the list samples operation.</p>
 * @public
 */
export interface ListSamplesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the job used to list samples.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SampleType = {
  CPU: "CPU",
  MEMORY: "MEMORY",
  NATIVE_AVG_DRAWTIME: "NATIVE_AVG_DRAWTIME",
  NATIVE_FPS: "NATIVE_FPS",
  NATIVE_FRAMES: "NATIVE_FRAMES",
  NATIVE_MAX_DRAWTIME: "NATIVE_MAX_DRAWTIME",
  NATIVE_MIN_DRAWTIME: "NATIVE_MIN_DRAWTIME",
  OPENGL_AVG_DRAWTIME: "OPENGL_AVG_DRAWTIME",
  OPENGL_FPS: "OPENGL_FPS",
  OPENGL_FRAMES: "OPENGL_FRAMES",
  OPENGL_MAX_DRAWTIME: "OPENGL_MAX_DRAWTIME",
  OPENGL_MIN_DRAWTIME: "OPENGL_MIN_DRAWTIME",
  RX: "RX",
  RX_RATE: "RX_RATE",
  THREADS: "THREADS",
  TX: "TX",
  TX_RATE: "TX_RATE",
} as const;

/**
 * @public
 */
export type SampleType = (typeof SampleType)[keyof typeof SampleType];

/**
 * <p>Represents a sample of performance data.</p>
 * @public
 */
export interface Sample {
  /**
   * <p>The sample's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The sample's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>CPU: A CPU sample type. This is expressed as the app processing CPU time
   *                     (including child processes) as reported by process, as a percentage.</p>
   *             </li>
   *             <li>
   *                 <p>MEMORY: A memory usage sample type. This is expressed as the total
   *                     proportional set size of an app process, in kilobytes.</p>
   *             </li>
   *             <li>
   *                 <p>NATIVE_AVG_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>NATIVE_FPS</p>
   *             </li>
   *             <li>
   *                 <p>NATIVE_FRAMES</p>
   *             </li>
   *             <li>
   *                 <p>NATIVE_MAX_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>NATIVE_MIN_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>OPENGL_AVG_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>OPENGL_FPS</p>
   *             </li>
   *             <li>
   *                 <p>OPENGL_FRAMES</p>
   *             </li>
   *             <li>
   *                 <p>OPENGL_MAX_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>OPENGL_MIN_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>RX</p>
   *             </li>
   *             <li>
   *                 <p>RX_RATE: The total number of bytes per second (TCP and UDP) that are sent,
   *                     by app process.</p>
   *             </li>
   *             <li>
   *                 <p>THREADS: A threads sample type. This is expressed as the total number of
   *                     threads per app process.</p>
   *             </li>
   *             <li>
   *                 <p>TX</p>
   *             </li>
   *             <li>
   *                 <p>TX_RATE: The total number of bytes per second (TCP and UDP) that are
   *                     received, by app process.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: SampleType | undefined;

  /**
   * <p>The presigned Amazon S3 URL that can be used with a GET request to download the sample's
   *             file.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>Represents the result of a list samples request.</p>
 * @public
 */
export interface ListSamplesResult {
  /**
   * <p>Information about the samples.</p>
   * @public
   */
  samples?: Sample[] | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a request to the list suites operation.</p>
 * @public
 */
export interface ListSuitesRequest {
  /**
   * <p>The job's Amazon Resource Name (ARN).</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the result of a list suites request.</p>
 * @public
 */
export interface ListSuitesResult {
  /**
   * <p>Information about the suites.</p>
   * @public
   */
  suites?: Suite[] | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource or resources for which to list tags. You can associate tags
   *             with the following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>,
   *                 <code>NETWORK_PROFILE</code>, <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>,
   *                 <code>SESSION</code>, <code>DEVICE_POOL</code>, <code>DEVICE</code>, and
   *             <code>VPCE_CONFIGURATION</code>.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * <p>The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a
 *             key and an optional value, both of which you define. Tag keys can have a maximum character length of 128
 *             characters. Tag values can have a maximum length of 256 characters. </p>
 * @public
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a tag. A <code>key</code> is a general label that acts like a
   *             category for more specific tag values.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that makes up a tag. A <code>value</code> acts as a descriptor in a
   *             tag category (key).</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum
   *             character length of 128 characters. Tag values can have a maximum length of 256 characters.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTestGridProjectsRequest {
  /**
   * <p>Return no more than this number of results.</p>
   * @public
   */
  maxResult?: number | undefined;

  /**
   * <p>From a response, used to continue a paginated listing. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestGridProjectsResult {
  /**
   * <p>The list of TestGridProjects, based on a <a>ListTestGridProjectsRequest</a>.</p>
   * @public
   */
  testGridProjects?: TestGridProject[] | undefined;

  /**
   * <p>Used for pagination. Pass into <a>ListTestGridProjects</a> to get more results in a paginated
   *          request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestGridSessionActionsRequest {
  /**
   * <p>The ARN of the session to retrieve.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The maximum number of sessions to return per response.</p>
   * @public
   */
  maxResult?: number | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An action taken by a <a>TestGridSession</a> browser instance.</p>
 * @public
 */
export interface TestGridSessionAction {
  /**
   * <p>The action taken by the session.</p>
   * @public
   */
  action?: string | undefined;

  /**
   * <p>The time that the session invoked the action.</p>
   * @public
   */
  started?: Date | undefined;

  /**
   * <p>The time, in milliseconds, that the action took to complete in the browser.</p>
   * @public
   */
  duration?: number | undefined;

  /**
   * <p>HTTP status code returned to the browser when the action was taken.</p>
   * @public
   */
  statusCode?: string | undefined;

  /**
   * <p>HTTP method that the browser used to make the request.</p>
   * @public
   */
  requestMethod?: string | undefined;
}

/**
 * @public
 */
export interface ListTestGridSessionActionsResult {
  /**
   * <p>The action taken by the session.</p>
   * @public
   */
  actions?: TestGridSessionAction[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TestGridSessionArtifactCategory = {
  LOG: "LOG",
  VIDEO: "VIDEO",
} as const;

/**
 * @public
 */
export type TestGridSessionArtifactCategory =
  (typeof TestGridSessionArtifactCategory)[keyof typeof TestGridSessionArtifactCategory];

/**
 * @public
 */
export interface ListTestGridSessionArtifactsRequest {
  /**
   * <p>The ARN of a <a>TestGridSession</a>. </p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>Limit results to a specified type of artifact.</p>
   * @public
   */
  type?: TestGridSessionArtifactCategory | undefined;

  /**
   * <p>The maximum number of results to be returned by a request.</p>
   * @public
   */
  maxResult?: number | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TestGridSessionArtifactType = {
  SELENIUM_LOG: "SELENIUM_LOG",
  UNKNOWN: "UNKNOWN",
  VIDEO: "VIDEO",
} as const;

/**
 * @public
 */
export type TestGridSessionArtifactType =
  (typeof TestGridSessionArtifactType)[keyof typeof TestGridSessionArtifactType];

/**
 * <p>Artifacts are video and other files that are produced in the process of running a browser in an automated
 *          context. </p>
 *          <note>
 *             <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p>
 *          </note>
 * @public
 */
export interface TestGridSessionArtifact {
  /**
   * <p>The file name of the artifact.</p>
   * @public
   */
  filename?: string | undefined;

  /**
   * <p>The kind of artifact.</p>
   * @public
   */
  type?: TestGridSessionArtifactType | undefined;

  /**
   * <p>A semi-stable URL to the content of the object.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 */
export interface ListTestGridSessionArtifactsResult {
  /**
   * <p>A list of test grid session artifacts for a <a>TestGridSession</a>.</p>
   * @public
   */
  artifacts?: TestGridSessionArtifact[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestGridSessionsRequest {
  /**
   * <p>ARN of a <a>TestGridProject</a>.</p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>Return only sessions in this state.</p>
   * @public
   */
  status?: TestGridSessionStatus | undefined;

  /**
   * <p>Return only sessions created after this time.</p>
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * <p>Return only  sessions created before this time.</p>
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * <p>Return only sessions that ended after this time.</p>
   * @public
   */
  endTimeAfter?: Date | undefined;

  /**
   * <p>Return only sessions that ended before this time.</p>
   * @public
   */
  endTimeBefore?: Date | undefined;

  /**
   * <p>Return only this many results at a time.</p>
   * @public
   */
  maxResult?: number | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestGridSessionsResult {
  /**
   * <p>The sessions that match the criteria in a <a>ListTestGridSessionsRequest</a>. </p>
   * @public
   */
  testGridSessions?: TestGridSession[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a request to the list tests operation.</p>
 * @public
 */
export interface ListTestsRequest {
  /**
   * <p>The test suite's Amazon Resource Name (ARN).</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the result of a list tests request.</p>
 * @public
 */
export interface ListTestsResult {
  /**
   * <p>Information about the tests.</p>
   * @public
   */
  tests?: Test[] | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a request to the list unique problems operation.</p>
 * @public
 */
export interface ListUniqueProblemsRequest {
  /**
   * <p>The unique problems' ARNs.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about a problem detail.</p>
 * @public
 */
export interface ProblemDetail {
  /**
   * <p>The problem detail's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The problem detail's name.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Represents a specific warning or failure.</p>
 * @public
 */
export interface Problem {
  /**
   * <p>Information about the associated run.</p>
   * @public
   */
  run?: ProblemDetail | undefined;

  /**
   * <p>Information about the associated job.</p>
   * @public
   */
  job?: ProblemDetail | undefined;

  /**
   * <p>Information about the associated suite.</p>
   * @public
   */
  suite?: ProblemDetail | undefined;

  /**
   * <p>Information about the associated test.</p>
   * @public
   */
  test?: ProblemDetail | undefined;

  /**
   * <p>Information about the associated device.</p>
   * @public
   */
  device?: Device | undefined;

  /**
   * <p>The problem's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   * @public
   */
  result?: ExecutionResult | undefined;

  /**
   * <p>A message about the problem's result.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>A collection of one or more problems, grouped by their result.</p>
 * @public
 */
export interface UniqueProblem {
  /**
   * <p>A message about the unique problems' result.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Information about the problems.</p>
   * @public
   */
  problems?: Problem[] | undefined;
}

/**
 * <p>Represents the result of a list unique problems request.</p>
 * @public
 */
export interface ListUniqueProblemsResult {
  /**
   * <p>Information about the unique problems.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   * @public
   */
  uniqueProblems?: Partial<Record<ExecutionResult, UniqueProblem[]>> | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a request to the list uploads operation.</p>
 * @public
 */
export interface ListUploadsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to list
   *             uploads.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The type of upload.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID_APP</p>
   *             </li>
   *             <li>
   *                 <p>IOS_APP</p>
   *             </li>
   *             <li>
   *                 <p>WEB_APP</p>
   *             </li>
   *             <li>
   *                 <p>EXTERNAL_DATA</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p> APPIUM_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_SPEC</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: UploadType | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the result of a list uploads request.</p>
 * @public
 */
export interface ListUploadsResult {
  /**
   * <p>Information about the uploads.</p>
   * @public
   */
  uploads?: Upload[] | undefined;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVPCEConfigurationsRequest {
  /**
   * <p>An integer that specifies the maximum number of items you want to return in the API response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVPCEConfigurationsResult {
  /**
   * <p>An array of <code>VPCEConfiguration</code> objects that contain information about your VPC endpoint
   *             configuration.</p>
   * @public
   */
  vpceConfigurations?: VPCEConfiguration[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a request for a purchase offering.</p>
 * @public
 */
export interface PurchaseOfferingRequest {
  /**
   * <p>The ID of the offering.</p>
   * @public
   */
  offeringId: string | undefined;

  /**
   * <p>The number of device slots to purchase in an offering request.</p>
   * @public
   */
  quantity: number | undefined;

  /**
   * <p>The ID of the offering promotion to be applied to the purchase.</p>
   * @public
   */
  offeringPromotionId?: string | undefined;
}

/**
 * <p>The result of the purchase offering (for example, success or failure).</p>
 * @public
 */
export interface PurchaseOfferingResult {
  /**
   * <p>Represents the offering transaction for the purchase result.</p>
   * @public
   */
  offeringTransaction?: OfferingTransaction | undefined;
}

/**
 * <p>A request that represents an offering renewal.</p>
 * @public
 */
export interface RenewOfferingRequest {
  /**
   * <p>The ID of a request to renew an offering.</p>
   * @public
   */
  offeringId: string | undefined;

  /**
   * <p>The quantity requested in an offering renewal.</p>
   * @public
   */
  quantity: number | undefined;
}

/**
 * <p>The result of a renewal offering.</p>
 * @public
 */
export interface RenewOfferingResult {
  /**
   * <p>Represents the status of the offering transaction for the renewal.</p>
   * @public
   */
  offeringTransaction?: OfferingTransaction | undefined;
}

/**
 * <p>An entity with the same name already exists.</p>
 * @public
 */
export class IdempotencyException extends __BaseException {
  readonly name: "IdempotencyException" = "IdempotencyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyException, __BaseException>) {
    super({
      name: "IdempotencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyException.prototype);
  }
}

/**
 * <p>Represents the device filters used in a test run and the maximum number of devices to be included in the
 *             run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.</p>
 * @public
 */
export interface DeviceSelectionConfiguration {
  /**
   * <p>Used to dynamically select a set of devices for a test run. A filter is made up of an
   *             attribute, an operator, and one or more values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Attribute</b>
   *                </p>
   *                 <p>The aspect of a device such as platform or model used as the selection
   *                     criteria in a device filter.</p>
   *                 <p>Allowed values include:</p>
   *                 <ul>
   *                   <li>
   *                         <p>ARN: The Amazon Resource Name (ARN) of the device (for example,
   *                                 <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>).</p>
   *                     </li>
   *                   <li>
   *                         <p>PLATFORM: The device platform. Valid values are ANDROID or
   *                             IOS.</p>
   *                     </li>
   *                   <li>
   *                         <p>OS_VERSION: The operating system version (for example,
   *                             10.3.2).</p>
   *                     </li>
   *                   <li>
   *                         <p>MODEL: The device model (for example, iPad 5th Gen).</p>
   *                     </li>
   *                   <li>
   *                         <p>AVAILABILITY: The current availability of the device. Valid values
   *                             are AVAILABLE, HIGHLY_AVAILABLE, BUSY, or
   *                             TEMPORARY_NOT_AVAILABLE.</p>
   *                     </li>
   *                   <li>
   *                         <p>FORM_FACTOR: The device form factor. Valid values are PHONE or
   *                             TABLET.</p>
   *                     </li>
   *                   <li>
   *                         <p>MANUFACTURER: The device manufacturer (for example,
   *                             Apple).</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote
   *                             access. Valid values are TRUE or FALSE.</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_DEBUG_ENABLED: Whether the device is enabled for remote debugging. Valid values
   *                             are TRUE or FALSE. Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                                 longer supported</a>, this filter is ignored.</p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_ARN: The Amazon Resource Name (ARN) of the device
   *                             instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_LABELS: The label of the device instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>FLEET_TYPE: The fleet type. Valid values are PUBLIC or PRIVATE.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Operator</b>
   *                </p>
   *                 <p>The filter operator.</p>
   *                 <ul>
   *                   <li>
   *                         <p>The EQUALS operator is available for every attribute except
   *                             INSTANCE_LABELS.</p>
   *                     </li>
   *                   <li>
   *                         <p>The CONTAINS operator is available for the INSTANCE_LABELS and MODEL
   *                             attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The IN and NOT_IN operators are available for the ARN, OS_VERSION,
   *                             MODEL, MANUFACTURER, and INSTANCE_ARN attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUALS, and
   *                             GREATER_THAN_OR_EQUALS operators are also available for the OS_VERSION
   *                             attribute.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Values</b>
   *                </p>
   *                 <p>An array of one or more filter values.</p>
   *                 <p class="title">
   *                   <b>Operator Values</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                         <p>The IN and NOT_IN operators can take a values array that has more than
   *                             one element.</p>
   *                     </li>
   *                   <li>
   *                         <p>The other operators require an array with a single element.</p>
   *                     </li>
   *                </ul>
   *                 <p class="title">
   *                   <b>Attribute Values</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                         <p>The PLATFORM attribute can be set to ANDROID or IOS.</p>
   *                     </li>
   *                   <li>
   *                         <p>The AVAILABILITY attribute can be set to AVAILABLE, HIGHLY_AVAILABLE, BUSY, or
   *                             TEMPORARY_NOT_AVAILABLE.</p>
   *                     </li>
   *                   <li>
   *                         <p>The FORM_FACTOR attribute can be set to PHONE or TABLET.</p>
   *                     </li>
   *                   <li>
   *                         <p>The FLEET_TYPE attribute can be set to PUBLIC or PRIVATE.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  filters: DeviceFilter[] | undefined;

  /**
   * <p>The maximum number of devices to be included in a test run.</p>
   * @public
   */
  maxDevices: number | undefined;
}

/**
 * <p>Represents configuration information about a test run, such as the execution
 *             timeout (in minutes).</p>
 * @public
 */
export interface ExecutionConfiguration {
  /**
   * <p>The number of minutes a test run executes before it times out.</p>
   * @public
   */
  jobTimeoutMinutes?: number | undefined;

  /**
   * <p>True if account cleanup is enabled at the beginning of the test. Otherwise, false.</p>
   * @public
   */
  accountsCleanup?: boolean | undefined;

  /**
   * <p>True if app package cleanup is enabled at the beginning of the test. Otherwise, false.</p>
   * @public
   */
  appPackagesCleanup?: boolean | undefined;

  /**
   * <p>Set to true to enable video capture. Otherwise, set to false. The default is true.</p>
   * @public
   */
  videoCapture?: boolean | undefined;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public
   *             devices, Device Farm always signs your apps again.</p>
   *         <p>For more information about how Device Farm re-signs your apps, see <a href="http://aws.amazon.com/device-farm/faqs/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   * @public
   */
  skipAppResign?: boolean | undefined;
}

/**
 * <p>Represents a request to the schedule run operation.</p>
 * @public
 */
export interface ScheduleRunRequest {
  /**
   * <p>The ARN of the project for the run to be scheduled.</p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>The ARN of an application package to run tests against, created with <a>CreateUpload</a>.
   *             See <a>ListUploads</a>.</p>
   * @public
   */
  appArn?: string | undefined;

  /**
   * <p>The ARN of the device pool for the run to be scheduled.</p>
   * @public
   */
  devicePoolArn?: string | undefined;

  /**
   * <p>The filter criteria used to dynamically select a set of devices for a test run and the maximum number of
   *             devices to be included in the run.</p>
   *         <p>Either <b>
   *                <code>devicePoolArn</code>
   *             </b> or <b>
   *                <code>deviceSelectionConfiguration</code>
   *             </b> is required in a
   *             request.</p>
   * @public
   */
  deviceSelectionConfiguration?: DeviceSelectionConfiguration | undefined;

  /**
   * <p>The name for the run to be scheduled.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Information about the test for the run to be scheduled.</p>
   * @public
   */
  test: ScheduleRunTest | undefined;

  /**
   * <p>Information about the settings for the run to be scheduled.</p>
   * @public
   */
  configuration?: ScheduleRunConfiguration | undefined;

  /**
   * <p>Specifies configuration information about a test run, such as the execution timeout
   *             (in minutes).</p>
   * @public
   */
  executionConfiguration?: ExecutionConfiguration | undefined;
}

/**
 * <p>Represents the result of a schedule run request.</p>
 * @public
 */
export interface ScheduleRunResult {
  /**
   * <p>Information about the scheduled run.</p>
   * @public
   */
  run?: Run | undefined;
}

/**
 * @public
 */
export interface StopJobRequest {
  /**
   * <p>Represents the Amazon Resource Name (ARN) of the Device Farm job to stop.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface StopJobResult {
  /**
   * <p>The job that was stopped.</p>
   * @public
   */
  job?: Job | undefined;
}

/**
 * <p>Represents the request to stop the remote access session.</p>
 * @public
 */
export interface StopRemoteAccessSessionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the remote access session to stop.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the response from the server that describes the remote access session
 *             when AWS Device Farm stops the session.</p>
 * @public
 */
export interface StopRemoteAccessSessionResult {
  /**
   * <p>A container that represents the metadata from the service about the remote access session you are
   *             stopping.</p>
   * @public
   */
  remoteAccessSession?: RemoteAccessSession | undefined;
}

/**
 * <p>Represents the request to stop a specific run.</p>
 * @public
 */
export interface StopRunRequest {
  /**
   * <p>Represents the Amazon Resource Name (ARN) of the Device Farm run to stop.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Represents the results of your stop run attempt.</p>
 * @public
 */
export interface StopRunResult {
  /**
   * <p>The run that was stopped.</p>
   * @public
   */
  run?: Run | undefined;
}

/**
 * <p>The request doesn't comply with the AWS Identity and Access Management (IAM) tag
 *             policy. Correct your request and then retry it.</p>
 * @public
 */
export class TagPolicyException extends __BaseException {
  readonly name: "TagPolicyException" = "TagPolicyException";
  readonly $fault: "client" = "client";
  resourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyException, __BaseException>) {
    super({
      name: "TagPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource or resources to which to add tags. You can associate tags
   *             with the following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>,
   *                 <code>NETWORK_PROFILE</code>, <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>,
   *                 <code>SESSION</code>, <code>DEVICE_POOL</code>, <code>DEVICE</code>, and
   *             <code>VPCE_CONFIGURATION</code>.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum
   *             character length of 128 characters. Tag values can have a maximum length of 256 characters.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The list of tags on the repository is over the limit. The maximum number of tags that
 *             can be applied to a repository is 50. </p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  resourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource or resources from which to delete tags. You can associate
   *             tags with the following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>,
   *                 <code>NETWORK_PROFILE</code>, <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>,
   *                 <code>SESSION</code>, <code>DEVICE_POOL</code>, <code>DEVICE</code>, and
   *             <code>VPCE_CONFIGURATION</code>.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDeviceInstanceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the device instance.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of the profile that you want to associate with the device instance.</p>
   * @public
   */
  profileArn?: string | undefined;

  /**
   * <p>An array of strings that you want to associate with the device instance.</p>
   * @public
   */
  labels?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceInstanceResult {
  /**
   * <p>An object that contains information about your device instance.</p>
   * @public
   */
  deviceInstance?: DeviceInstance | undefined;
}

/**
 * <p>Represents a request to the update device pool operation.</p>
 * @public
 */
export interface UpdateDevicePoolRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Device Farm device pool to update.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A string that represents the name of the device pool to update.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the device pool to update.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Represents the rules to modify for the device pool. Updating rules is optional. If you update rules for
   *             your request, the update replaces the existing rules.</p>
   * @public
   */
  rules?: Rule[] | undefined;

  /**
   * <p>The number of devices that Device Farm can add to your device pool. Device Farm adds
   *             devices that are available and that meet the criteria that you assign for the
   *                 <code>rules</code> parameter. Depending on how many devices meet these constraints,
   *             your device pool might contain fewer devices than the value for this parameter.</p>
   *         <p>By specifying the maximum number of devices, you can control the costs that you incur
   *             by running tests.</p>
   *         <p>If you use this parameter in your request, you cannot use the
   *                 <code>clearMaxDevices</code> parameter in the same request.</p>
   * @public
   */
  maxDevices?: number | undefined;

  /**
   * <p>Sets whether the <code>maxDevices</code> parameter applies to your device pool. If you set this parameter
   *             to <code>true</code>, the <code>maxDevices</code> parameter does not apply, and Device Farm does not limit
   *             the number of devices that it adds to your device pool. In this case, Device Farm adds all available devices
   *             that meet the criteria specified in the <code>rules</code> parameter.</p>
   *         <p>If you use this parameter in your request, you cannot use the <code>maxDevices</code>
   *             parameter in the same request.</p>
   * @public
   */
  clearMaxDevices?: boolean | undefined;
}

/**
 * <p>Represents the result of an update device pool request.</p>
 * @public
 */
export interface UpdateDevicePoolResult {
  /**
   * <p>The device pool you just updated.</p>
   * @public
   */
  devicePool?: DevicePool | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The updated name for your instance profile.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description for your instance profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated choice for whether you want to specify package cleanup. The default value
   *             is <code>false</code> for private devices.</p>
   * @public
   */
  packageCleanup?: boolean | undefined;

  /**
   * <p>An array of strings that specifies the list of app packages that should not be cleaned up from the device
   *             after a test run is over.</p>
   *         <p>The list of packages is only considered if you set <code>packageCleanup</code> to
   *                 <code>true</code>.</p>
   * @public
   */
  excludeAppPackagesFromCleanup?: string[] | undefined;

  /**
   * <p>The updated choice for whether you want to reboot the device after use. The default
   *             value is <code>true</code>.</p>
   * @public
   */
  rebootAfterUse?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceProfileResult {
  /**
   * <p>An object that contains information about your instance profile.</p>
   * @public
   */
  instanceProfile?: InstanceProfile | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to update network
   *             profile settings.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the network profile about which you are returning
   *             information.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the network profile about which you are returning
   *             information.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of network profile to return information about. Valid values are listed here.</p>
   * @public
   */
  type?: NetworkProfileType | undefined;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   * @public
   */
  uplinkBandwidthBits?: number | undefined;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   * @public
   */
  downlinkBandwidthBits?: number | undefined;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   * @public
   */
  uplinkDelayMs?: number | undefined;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   * @public
   */
  downlinkDelayMs?: number | undefined;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   * @public
   */
  uplinkJitterMs?: number | undefined;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   * @public
   */
  downlinkJitterMs?: number | undefined;

  /**
   * <p>Proportion of transmitted packets that fail to arrive from 0 to 100
   *             percent.</p>
   * @public
   */
  uplinkLossPercent?: number | undefined;

  /**
   * <p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>
   * @public
   */
  downlinkLossPercent?: number | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkProfileResult {
  /**
   * <p>A list of the available network profiles.</p>
   * @public
   */
  networkProfile?: NetworkProfile | undefined;
}

/**
 * <p>Represents a request to the update project operation.</p>
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project whose name to update.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A string that represents the new name of the project that you are updating.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The number of minutes a test run in the project executes before it times out.</p>
   * @public
   */
  defaultJobTimeoutMinutes?: number | undefined;

  /**
   * <p>The VPC security groups and subnets that are attached to a project.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;
}

/**
 * <p>Represents the result of an update project request.</p>
 * @public
 */
export interface UpdateProjectResult {
  /**
   * <p>The project to update.</p>
   * @public
   */
  project?: Project | undefined;
}

/**
 * @public
 */
export interface UpdateTestGridProjectRequest {
  /**
   * <p>ARN of the project to update.</p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>Human-readable name for the project.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Human-readable description for the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The VPC security groups and subnets that are attached to a project.</p>
   * @public
   */
  vpcConfig?: TestGridVpcConfig | undefined;
}

/**
 * @public
 */
export interface UpdateTestGridProjectResult {
  /**
   * <p>The project, including updated information.</p>
   * @public
   */
  testGridProject?: TestGridProject | undefined;
}

/**
 * @public
 */
export interface UpdateUploadRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the uploaded test spec.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The upload's test spec file name. The name must not contain any forward slashes (/). The test spec file
   *             name must end with the <code>.yaml</code> or <code>.yml</code> file extension.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The upload's content type (for example, <code>application/x-yaml</code>).</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>Set to true if the YAML file has changed and must be updated. Otherwise, set to false.</p>
   * @public
   */
  editContent?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateUploadResult {
  /**
   * <p>A test spec uploaded to Device Farm.</p>
   * @public
   */
  upload?: Upload | undefined;
}

/**
 * @public
 */
export interface UpdateVPCEConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to
   *             update.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The friendly name you give to your VPC endpoint configuration to manage your configurations more
   *             easily.</p>
   * @public
   */
  vpceConfigurationName?: string | undefined;

  /**
   * <p>The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.</p>
   * @public
   */
  vpceServiceName?: string | undefined;

  /**
   * <p>The DNS (domain) name used to connect to your private service in your VPC. The DNS name must not already
   *             be in use on the internet.</p>
   * @public
   */
  serviceDnsName?: string | undefined;

  /**
   * <p>An optional description that provides details about your VPC endpoint configuration.</p>
   * @public
   */
  vpceConfigurationDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVPCEConfigurationResult {
  /**
   * <p>An object that contains information about your VPC endpoint configuration.</p>
   * @public
   */
  vpceConfiguration?: VPCEConfiguration | undefined;
}

/**
 * @internal
 */
export const CreateTestGridUrlResultFilterSensitiveLog = (obj: CreateTestGridUrlResult): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadFilterSensitiveLog = (obj: Upload): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUploadResultFilterSensitiveLog = (obj: CreateUploadResult): any => ({
  ...obj,
  ...(obj.upload && { upload: UploadFilterSensitiveLog(obj.upload) }),
});

/**
 * @internal
 */
export const GetUploadResultFilterSensitiveLog = (obj: GetUploadResult): any => ({
  ...obj,
  ...(obj.upload && { upload: UploadFilterSensitiveLog(obj.upload) }),
});

/**
 * @internal
 */
export const InstallToRemoteAccessSessionResultFilterSensitiveLog = (obj: InstallToRemoteAccessSessionResult): any => ({
  ...obj,
  ...(obj.appUpload && { appUpload: UploadFilterSensitiveLog(obj.appUpload) }),
});

/**
 * @internal
 */
export const TestGridSessionArtifactFilterSensitiveLog = (obj: TestGridSessionArtifact): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTestGridSessionArtifactsResultFilterSensitiveLog = (obj: ListTestGridSessionArtifactsResult): any => ({
  ...obj,
  ...(obj.artifacts && { artifacts: obj.artifacts.map((item) => TestGridSessionArtifactFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListUploadsResultFilterSensitiveLog = (obj: ListUploadsResult): any => ({
  ...obj,
  ...(obj.uploads && { uploads: obj.uploads.map((item) => UploadFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateUploadResultFilterSensitiveLog = (obj: UpdateUploadResult): any => ({
  ...obj,
  ...(obj.upload && { upload: UploadFilterSensitiveLog(obj.upload) }),
});
