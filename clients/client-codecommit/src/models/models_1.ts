// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeCommitServiceException as __BaseException } from "./CodeCommitServiceException";

import {
  ApprovalRule,
  ApprovalRuleTemplate,
  ApprovalState,
  Comment,
  Commit,
  ConflictDetailLevelTypeEnum,
  ConflictResolution,
  ConflictResolutionStrategyTypeEnum,
  FileModeTypeEnum,
  Location,
  OverrideStatus,
  PullRequest,
  PullRequestStatusEnum,
  RepositoryTrigger,
} from "./models_0";

/**
 * <p>Information about a version of a file.</p>
 * @public
 */
export interface FileVersion {
  /**
   * <p>Returns information about a specific commit.</p>
   * @public
   */
  commit?: Commit | undefined;

  /**
   * <p>The blob ID of the object that represents the content of the file in this version.</p>
   * @public
   */
  blobId?: string | undefined;

  /**
   * <p>The name and path of the file at which this blob is indexed which contains the data for this version of the file. This value will
   *         vary between file versions if a file is renamed or if its path changes.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>An array of commit IDs that contain more recent versions of this file. If there are no additional versions of the file, this array will be empty.</p>
   * @public
   */
  revisionChildren?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFileCommitHistoryResponse {
  /**
   * <p>An array of FileVersion objects that form a directed acyclic graph (DAG) of the changes to the file made by the commits that changed the file.</p>
   * @public
   */
  revisionDag: FileVersion[] | undefined;

  /**
   * <p>An enumeration token that can be used to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the author of the pull request, and then try again.</p>
 * @public
 */
export class InvalidAuthorArnException extends __BaseException {
  readonly name: "InvalidAuthorArnException" = "InvalidAuthorArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAuthorArnException, __BaseException>) {
    super({
      name: "InvalidAuthorArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAuthorArnException.prototype);
  }
}

/**
 * <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
 * @public
 */
export class InvalidPullRequestStatusException extends __BaseException {
  readonly name: "InvalidPullRequestStatusException" = "InvalidPullRequestStatusException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPullRequestStatusException, __BaseException>) {
    super({
      name: "InvalidPullRequestStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPullRequestStatusException.prototype);
  }
}

/**
 * @public
 */
export interface ListPullRequestsInput {
  /**
   * <p>The name of the repository for which you want to list pull requests.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results
   *         to pull requests created by that user.</p>
   * @public
   */
  authorArn?: string | undefined;

  /**
   * <p>Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status.</p>
   * @public
   */
  pullRequestStatus?: PullRequestStatusEnum | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPullRequestsOutput {
  /**
   * <p>The system-generated IDs of the pull requests.</p>
   * @public
   */
  pullRequestIds: string[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The specified sort order is not valid.</p>
 * @public
 */
export class InvalidOrderException extends __BaseException {
  readonly name: "InvalidOrderException" = "InvalidOrderException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOrderException, __BaseException>) {
    super({
      name: "InvalidOrderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOrderException.prototype);
  }
}

/**
 * <p>The specified sort by value is not valid.</p>
 * @public
 */
export class InvalidSortByException extends __BaseException {
  readonly name: "InvalidSortByException" = "InvalidSortByException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSortByException, __BaseException>) {
    super({
      name: "InvalidSortByException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSortByException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const OrderEnum = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
} as const;

/**
 * @public
 */
export type OrderEnum = (typeof OrderEnum)[keyof typeof OrderEnum];

/**
 * @public
 * @enum
 */
export const SortByEnum = {
  MODIFIED_DATE: "lastModifiedDate",
  REPOSITORY_NAME: "repositoryName",
} as const;

/**
 * @public
 */
export type SortByEnum = (typeof SortByEnum)[keyof typeof SortByEnum];

/**
 * <p>Represents the input of a list repositories operation.</p>
 * @public
 */
export interface ListRepositoriesInput {
  /**
   * <p>An enumeration token that allows the operation to batch the results of the operation.
   *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to CodeCommit,
   *             another page of 1,000 records is retrieved.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The criteria used to sort the results of a list repositories operation.</p>
   * @public
   */
  sortBy?: SortByEnum | undefined;

  /**
   * <p>The order in which to sort the results of a list repositories operation.</p>
   * @public
   */
  order?: OrderEnum | undefined;
}

/**
 * <p>Information about a repository name and ID.</p>
 * @public
 */
export interface RepositoryNameIdPair {
  /**
   * <p>The name associated with the repository.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The ID associated with the repository.</p>
   * @public
   */
  repositoryId?: string | undefined;
}

/**
 * <p>Represents the output of a list repositories operation.</p>
 * @public
 */
export interface ListRepositoriesOutput {
  /**
   * <p>Lists the repositories called by the list repositories operation.</p>
   * @public
   */
  repositories?: RepositoryNameIdPair[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the results of the operation.
   *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to CodeCommit,
   *             another page of 1,000 records is retrieved.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesForApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template for which you want to list repositories that are associated with that template.</p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesForApprovalRuleTemplateOutput {
  /**
   * <p>A list of repository names that are associated with the specified approval rule template.</p>
   * @public
   */
  repositoryNames?: string[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The value for the resource ARN is not valid. For more information about resources in CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the CodeCommit User Guide.</p>
 * @public
 */
export class InvalidResourceArnException extends __BaseException {
  readonly name: "InvalidResourceArnException" = "InvalidResourceArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceArnException, __BaseException>) {
    super({
      name: "InvalidResourceArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceArnException.prototype);
  }
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information
   *             about tags, if any.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A valid Amazon Resource Name (ARN) for an CodeCommit resource is required. For a list of valid resources in CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the CodeCommit User Guide.</p>
 * @public
 */
export class ResourceArnRequiredException extends __BaseException {
  readonly name: "ResourceArnRequiredException" = "ResourceArnRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceArnRequiredException, __BaseException>) {
    super({
      name: "ResourceArnRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceArnRequiredException.prototype);
  }
}

/**
 * <p>The specified target branch is not valid.</p>
 * @public
 */
export class InvalidTargetBranchException extends __BaseException {
  readonly name: "InvalidTargetBranchException" = "InvalidTargetBranchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetBranchException, __BaseException>) {
    super({
      name: "InvalidTargetBranchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetBranchException.prototype);
  }
}

/**
 * @public
 */
export interface MergeBranchesByFastForwardInput {
  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied.</p>
   * @public
   */
  targetBranch?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByFastForwardOutput {
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesBySquashInput {
  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied. </p>
   * @public
   */
  targetBranch?: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The commit message for the merge.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If this is specified as true, a .gitkeep file is
   *             created for empty folders. The default is false.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergeBranchesBySquashOutput {
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByThreeWayInput {
  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied. </p>
   * @public
   */
  targetBranch?: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByThreeWayOutput {
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByFastForwardInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *         exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   * @public
   */
  sourceCommitId?: string | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByFastForwardOutput {
  /**
   * <p>Information about the specified pull request, including the merge.</p>
   * @public
   */
  pullRequest?: PullRequest | undefined;
}

/**
 * <p>The pull request cannot be merged because one or more approval rules applied to the pull request have conditions that have not been met.</p>
 * @public
 */
export class PullRequestApprovalRulesNotSatisfiedException extends __BaseException {
  readonly name: "PullRequestApprovalRulesNotSatisfiedException" = "PullRequestApprovalRulesNotSatisfiedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullRequestApprovalRulesNotSatisfiedException, __BaseException>) {
    super({
      name: "PullRequestApprovalRulesNotSatisfiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullRequestApprovalRulesNotSatisfiedException.prototype);
  }
}

/**
 * <p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request.
 *             The pull request might have been updated. Make sure that you have the latest changes.</p>
 * @public
 */
export class TipOfSourceReferenceIsDifferentException extends __BaseException {
  readonly name: "TipOfSourceReferenceIsDifferentException" = "TipOfSourceReferenceIsDifferentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TipOfSourceReferenceIsDifferentException, __BaseException>) {
    super({
      name: "TipOfSourceReferenceIsDifferentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TipOfSourceReferenceIsDifferentException.prototype);
  }
}

/**
 * @public
 */
export interface MergePullRequestBySquashInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   * @public
   */
  sourceCommitId?: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergePullRequestBySquashOutput {
  /**
   * <p>Returns information about a pull request.</p>
   * @public
   */
  pullRequest?: PullRequest | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByThreeWayInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   * @public
   */
  sourceCommitId?: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByThreeWayOutput {
  /**
   * <p>Returns information about a pull request.</p>
   * @public
   */
  pullRequest?: PullRequest | undefined;
}

/**
 * <p>The override status is not valid. Valid statuses are OVERRIDE and REVOKE.</p>
 * @public
 */
export class InvalidOverrideStatusException extends __BaseException {
  readonly name: "InvalidOverrideStatusException" = "InvalidOverrideStatusException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOverrideStatusException, __BaseException>) {
    super({
      name: "InvalidOverrideStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOverrideStatusException.prototype);
  }
}

/**
 * <p>The pull request has already had its approval rules set to override.</p>
 * @public
 */
export class OverrideAlreadySetException extends __BaseException {
  readonly name: "OverrideAlreadySetException" = "OverrideAlreadySetException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OverrideAlreadySetException, __BaseException>) {
    super({
      name: "OverrideAlreadySetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OverrideAlreadySetException.prototype);
  }
}

/**
 * @public
 */
export interface OverridePullRequestApprovalRulesInput {
  /**
   * <p>The system-generated ID of the pull request for which you want to override all
   *             approval rule requirements. To get this information, use
   *             <a>GetPullRequest</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the most recent revision of the pull request. You cannot override approval rules for anything but the most recent revision of a pull request.
   *             To get the revision ID, use GetPullRequest.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>Whether you want to set aside approval rule requirements for the pull request (OVERRIDE) or revoke a previous override and apply
   *         approval rule requirements (REVOKE). REVOKE status is not stored.</p>
   * @public
   */
  overrideStatus: OverrideStatus | undefined;
}

/**
 * <p>An override status is required, but no value was provided. Valid values include OVERRIDE and REVOKE.</p>
 * @public
 */
export class OverrideStatusRequiredException extends __BaseException {
  readonly name: "OverrideStatusRequiredException" = "OverrideStatusRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OverrideStatusRequiredException, __BaseException>) {
    super({
      name: "OverrideStatusRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OverrideStatusRequiredException.prototype);
  }
}

/**
 * <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
 * @public
 */
export class CommentContentRequiredException extends __BaseException {
  readonly name: "CommentContentRequiredException" = "CommentContentRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommentContentRequiredException, __BaseException>) {
    super({
      name: "CommentContentRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommentContentRequiredException.prototype);
  }
}

/**
 * <p>The comment is too large. Comments are limited to 10,240 characters.</p>
 * @public
 */
export class CommentContentSizeLimitExceededException extends __BaseException {
  readonly name: "CommentContentSizeLimitExceededException" = "CommentContentSizeLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommentContentSizeLimitExceededException, __BaseException>) {
    super({
      name: "CommentContentSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommentContentSizeLimitExceededException.prototype);
  }
}

/**
 * <p>The location of the file is not valid. Make sure that you include the file name and
 *             extension.</p>
 * @public
 */
export class InvalidFileLocationException extends __BaseException {
  readonly name: "InvalidFileLocationException" = "InvalidFileLocationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFileLocationException, __BaseException>) {
    super({
      name: "InvalidFileLocationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFileLocationException.prototype);
  }
}

/**
 * <p>The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.</p>
 * @public
 */
export class InvalidFilePositionException extends __BaseException {
  readonly name: "InvalidFilePositionException" = "InvalidFilePositionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilePositionException, __BaseException>) {
    super({
      name: "InvalidFilePositionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilePositionException.prototype);
  }
}

/**
 * <p>Either the enum is not in a valid format, or the specified file version enum is not valid in respect to the current file version.</p>
 * @public
 */
export class InvalidRelativeFileVersionEnumException extends __BaseException {
  readonly name: "InvalidRelativeFileVersionEnumException" = "InvalidRelativeFileVersionEnumException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRelativeFileVersionEnumException, __BaseException>) {
    super({
      name: "InvalidRelativeFileVersionEnumException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRelativeFileVersionEnumException.prototype);
  }
}

/**
 * @public
 */
export interface PostCommentForComparedCommitInput {
  /**
   * <p>The name of the repository where you want to post a comment on the comparison between commits.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the before
   *             commit. Required for commenting on any commit unless that commit is the initial
   *             commit.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the after
   *             commit.</p>
   * @public
   */
  afterCommitId: string | undefined;

  /**
   * <p>The location of the comparison where you want to comment.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>The content of the comment you want to make.</p>
   * @public
   */
  content: string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface PostCommentForComparedCommitOutput {
  /**
   * <p>The name of the repository where you posted a comment on the comparison between commits.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>In the directionality you established, the full commit ID of the before commit.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>In the directionality you established, the full commit ID of the after commit.</p>
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * <p>In the directionality you established, the blob ID of the before blob.</p>
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * <p>In the directionality you established, the blob ID of the after blob.</p>
   * @public
   */
  afterBlobId?: string | undefined;

  /**
   * <p>The location of the comment in the comparison between the two commits.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>The content of the comment you posted.</p>
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface PostCommentForPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where you want to post a comment on a pull request.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
   * @public
   */
  beforeCommitId: string | undefined;

  /**
   * <p>The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.</p>
   * @public
   */
  afterCommitId: string | undefined;

  /**
   * <p>The location of the change where you want to post your comment. If no location is
   *             provided, the comment is posted as a general comment on the pull request difference
   *             between the before commit ID and the after commit ID.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>The content of your comment on the change.</p>
   * @public
   */
  content: string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface PostCommentForPullRequestOutput {
  /**
   * <p>The name of the repository where you posted a comment on a pull request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The system-generated ID of the pull request. </p>
   * @public
   */
  pullRequestId?: string | undefined;

  /**
   * <p>The full commit ID of the commit in the source branch used to create the pull request,
   *             or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>The full commit ID of the commit in the destination branch where the pull request is
   *             merged.</p>
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * <p>In the directionality of the pull request, the blob ID of the before blob.</p>
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * <p>In the directionality of the pull request, the blob ID of the after blob.</p>
   * @public
   */
  afterBlobId?: string | undefined;

  /**
   * <p>The location of the change where you posted your comment.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>The content of the comment you posted.</p>
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface PostCommentReplyInput {
  /**
   * <p>The system-generated ID of the comment to which you want to reply. To get this ID, use <a>GetCommentsForComparedCommit</a>
   *         or <a>GetCommentsForPullRequest</a>.</p>
   * @public
   */
  inReplyTo: string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The contents of your reply to a comment.</p>
   * @public
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface PostCommentReplyOutput {
  /**
   * <p>Information about the reply to a comment.</p>
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * <p>The value of the reaction is not valid. For more information, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">CodeCommit User Guide</a>.</p>
 * @public
 */
export class InvalidReactionValueException extends __BaseException {
  readonly name: "InvalidReactionValueException" = "InvalidReactionValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidReactionValueException, __BaseException>) {
    super({
      name: "InvalidReactionValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidReactionValueException.prototype);
  }
}

/**
 * @public
 */
export interface PutCommentReactionInput {
  /**
   * <p>The ID of the comment to which you want to add or update a reaction.</p>
   * @public
   */
  commentId: string | undefined;

  /**
   * <p>The emoji reaction you want to add or update. To remove a reaction, provide a value of blank or null. You can also provide the value of none.
   *             For information about emoji reaction values supported in CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-commit-comment.html#emoji-reaction-table">CodeCommit User Guide</a>.</p>
   * @public
   */
  reactionValue: string | undefined;
}

/**
 * <p>The number of reactions has been exceeded. Reactions are limited to one reaction per user for each individual comment ID.</p>
 * @public
 */
export class ReactionLimitExceededException extends __BaseException {
  readonly name: "ReactionLimitExceededException" = "ReactionLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReactionLimitExceededException, __BaseException>) {
    super({
      name: "ReactionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReactionLimitExceededException.prototype);
  }
}

/**
 * <p>A reaction value is required. </p>
 * @public
 */
export class ReactionValueRequiredException extends __BaseException {
  readonly name: "ReactionValueRequiredException" = "ReactionValueRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReactionValueRequiredException, __BaseException>) {
    super({
      name: "ReactionValueRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReactionValueRequiredException.prototype);
  }
}

/**
 * <p>The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.</p>
 * @public
 */
export class FileContentRequiredException extends __BaseException {
  readonly name: "FileContentRequiredException" = "FileContentRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileContentRequiredException, __BaseException>) {
    super({
      name: "FileContentRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileContentRequiredException.prototype);
  }
}

/**
 * @public
 */
export interface PutFileInput {
  /**
   * <p>The name of the repository where you want to add or update the file.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch where you want to add or update the file. If this is an empty
   *             repository, this branch is created.</p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The content of the file, in binary object format. </p>
   * @public
   */
  fileContent: Uint8Array | undefined;

  /**
   * <p>The name of the file you want to add or update, including the relative path to the file in the repository.</p>
   *          <note>
   *             <p>If the path does not currently exist in the repository, the path is created as part of adding
   *                 the file.</p>
   *          </note>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The file mode permissions of the blob. Valid file mode permissions are listed
   *             here.</p>
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;

  /**
   * <p>The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository,
   *             no commit ID is required. If this is not an empty repository, a commit ID is required. </p>
   *          <p>The commit ID must match the ID of the head commit at the time of the operation.
   *             Otherwise, an error occurs, and the file is not added or updated.</p>
   * @public
   */
  parentCommitId?: string | undefined;

  /**
   * <p>A message about why this file was added or updated. Although it is optional, a message
   *             makes the commit history for your repository more useful.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>The name of the person adding or updating the file. Although it is optional, a name
   *             makes the commit history for your repository more useful.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>An email address for the person adding or updating the file.</p>
   * @public
   */
  email?: string | undefined;
}

/**
 * @public
 */
export interface PutFileOutput {
  /**
   * <p>The full SHA ID of the commit that contains this file change.</p>
   * @public
   */
  commitId: string | undefined;

  /**
   * <p>The ID of the blob, which is its SHA-1 pointer.</p>
   * @public
   */
  blobId: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains this file change.</p>
   * @public
   */
  treeId: string | undefined;
}

/**
 * <p>The file was not added or updated because the content of the file is exactly the same as the content of that file in the repository and branch
 *         that you specified.</p>
 * @public
 */
export class SameFileContentException extends __BaseException {
  readonly name: "SameFileContentException" = "SameFileContentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SameFileContentException, __BaseException>) {
    super({
      name: "SameFileContentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SameFileContentException.prototype);
  }
}

/**
 * <p>One or more branch names specified for the trigger is not valid.</p>
 * @public
 */
export class InvalidRepositoryTriggerBranchNameException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerBranchNameException" = "InvalidRepositoryTriggerBranchNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerBranchNameException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerBranchNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerBranchNameException.prototype);
  }
}

/**
 * <p>The custom data provided for the trigger is not valid.</p>
 * @public
 */
export class InvalidRepositoryTriggerCustomDataException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerCustomDataException" = "InvalidRepositoryTriggerCustomDataException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerCustomDataException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerCustomDataException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerCustomDataException.prototype);
  }
}

/**
 * <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
 * @public
 */
export class InvalidRepositoryTriggerDestinationArnException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerDestinationArnException" = "InvalidRepositoryTriggerDestinationArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerDestinationArnException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerDestinationArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerDestinationArnException.prototype);
  }
}

/**
 * <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
 * @public
 */
export class InvalidRepositoryTriggerEventsException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerEventsException" = "InvalidRepositoryTriggerEventsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerEventsException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerEventsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerEventsException.prototype);
  }
}

/**
 * <p>The name of the trigger is not valid.</p>
 * @public
 */
export class InvalidRepositoryTriggerNameException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerNameException" = "InvalidRepositoryTriggerNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerNameException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerNameException.prototype);
  }
}

/**
 * <p>The Amazon Web Services Region for the trigger target does not match the Amazon Web Services Region for the
 *             repository. Triggers must be created in the same Amazon Web Services Region as the target for the
 *             trigger.</p>
 * @public
 */
export class InvalidRepositoryTriggerRegionException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerRegionException" = "InvalidRepositoryTriggerRegionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerRegionException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerRegionException.prototype);
  }
}

/**
 * <p>The number of branches for the trigger was exceeded.</p>
 * @public
 */
export class MaximumBranchesExceededException extends __BaseException {
  readonly name: "MaximumBranchesExceededException" = "MaximumBranchesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumBranchesExceededException, __BaseException>) {
    super({
      name: "MaximumBranchesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumBranchesExceededException.prototype);
  }
}

/**
 * <p>The number of triggers allowed for the repository was exceeded.</p>
 * @public
 */
export class MaximumRepositoryTriggersExceededException extends __BaseException {
  readonly name: "MaximumRepositoryTriggersExceededException" = "MaximumRepositoryTriggersExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumRepositoryTriggersExceededException, __BaseException>) {
    super({
      name: "MaximumRepositoryTriggersExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumRepositoryTriggersExceededException.prototype);
  }
}

/**
 * <p>Represents the input of a put repository triggers operation.</p>
 * @public
 */
export interface PutRepositoryTriggersInput {
  /**
   * <p>The name of the repository where you want to create or update the trigger.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The JSON block of configuration information for each trigger.</p>
   * @public
   */
  triggers: RepositoryTrigger[] | undefined;
}

/**
 * <p>Represents the output of a put repository triggers operation.</p>
 * @public
 */
export interface PutRepositoryTriggersOutput {
  /**
   * <p>The system-generated unique ID for the create or update operation.</p>
   * @public
   */
  configurationId?: string | undefined;
}

/**
 * <p>At least one branch name is required, but was not specified in the trigger
 *             configuration.</p>
 * @public
 */
export class RepositoryTriggerBranchNameListRequiredException extends __BaseException {
  readonly name: "RepositoryTriggerBranchNameListRequiredException" =
    "RepositoryTriggerBranchNameListRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryTriggerBranchNameListRequiredException, __BaseException>) {
    super({
      name: "RepositoryTriggerBranchNameListRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryTriggerBranchNameListRequiredException.prototype);
  }
}

/**
 * <p>A destination ARN for the target service for the trigger is required, but was not
 *             specified.</p>
 * @public
 */
export class RepositoryTriggerDestinationArnRequiredException extends __BaseException {
  readonly name: "RepositoryTriggerDestinationArnRequiredException" =
    "RepositoryTriggerDestinationArnRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryTriggerDestinationArnRequiredException, __BaseException>) {
    super({
      name: "RepositoryTriggerDestinationArnRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryTriggerDestinationArnRequiredException.prototype);
  }
}

/**
 * <p>At least one event for the trigger is required, but was not specified.</p>
 * @public
 */
export class RepositoryTriggerEventsListRequiredException extends __BaseException {
  readonly name: "RepositoryTriggerEventsListRequiredException" = "RepositoryTriggerEventsListRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryTriggerEventsListRequiredException, __BaseException>) {
    super({
      name: "RepositoryTriggerEventsListRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryTriggerEventsListRequiredException.prototype);
  }
}

/**
 * <p>A name for the trigger is required, but was not specified.</p>
 * @public
 */
export class RepositoryTriggerNameRequiredException extends __BaseException {
  readonly name: "RepositoryTriggerNameRequiredException" = "RepositoryTriggerNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryTriggerNameRequiredException, __BaseException>) {
    super({
      name: "RepositoryTriggerNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryTriggerNameRequiredException.prototype);
  }
}

/**
 * <p>The list of triggers for the repository is required, but was not specified.</p>
 * @public
 */
export class RepositoryTriggersListRequiredException extends __BaseException {
  readonly name: "RepositoryTriggersListRequiredException" = "RepositoryTriggersListRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryTriggersListRequiredException, __BaseException>) {
    super({
      name: "RepositoryTriggersListRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryTriggersListRequiredException.prototype);
  }
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The key-value pair to use when tagging this repository.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>A map of tags is required.</p>
 * @public
 */
export class TagsMapRequiredException extends __BaseException {
  readonly name: "TagsMapRequiredException" = "TagsMapRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagsMapRequiredException, __BaseException>) {
    super({
      name: "TagsMapRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagsMapRequiredException.prototype);
  }
}

/**
 * <p>Represents the input of a test repository triggers operation.</p>
 * @public
 */
export interface TestRepositoryTriggersInput {
  /**
   * <p>The name of the repository in which to test the triggers.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The list of triggers to test.</p>
   * @public
   */
  triggers: RepositoryTrigger[] | undefined;
}

/**
 * <p>A trigger failed to run.</p>
 * @public
 */
export interface RepositoryTriggerExecutionFailure {
  /**
   * <p>The name of the trigger that did not run.</p>
   * @public
   */
  trigger?: string | undefined;

  /**
   * <p>Message information about the trigger that did not run.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * <p>Represents the output of a test repository triggers operation.</p>
 * @public
 */
export interface TestRepositoryTriggersOutput {
  /**
   * <p>The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.</p>
   * @public
   */
  successfulExecutions?: string[] | undefined;

  /**
   * <p>The list of triggers that were not tested. This list provides the names of the
   *             triggers that could not be tested, separated by commas.</p>
   * @public
   */
  failedExecutions?: RepositoryTriggerExecutionFailure[] | undefined;
}

/**
 * <p>The list of tags is not valid.</p>
 * @public
 */
export class InvalidTagKeysListException extends __BaseException {
  readonly name: "InvalidTagKeysListException" = "InvalidTagKeysListException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagKeysListException, __BaseException>) {
    super({
      name: "InvalidTagKeysListException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagKeysListException.prototype);
  }
}

/**
 * <p>A list of tag keys is required. The list cannot be empty or null.</p>
 * @public
 */
export class TagKeysListRequiredException extends __BaseException {
  readonly name: "TagKeysListRequiredException" = "TagKeysListRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagKeysListRequiredException, __BaseException>) {
    super({
      name: "TagKeysListRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagKeysListRequiredException.prototype);
  }
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to remove tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag key for each tag that you want to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>The SHA-256 hash signature for the rule content is not valid.</p>
 * @public
 */
export class InvalidRuleContentSha256Exception extends __BaseException {
  readonly name: "InvalidRuleContentSha256Exception" = "InvalidRuleContentSha256Exception";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRuleContentSha256Exception, __BaseException>) {
    super({
      name: "InvalidRuleContentSha256Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRuleContentSha256Exception.prototype);
  }
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateContentInput {
  /**
   * <p>The name of the approval rule template where you want to update the content of the rule. </p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The content that replaces the existing content of the rule. Content statements must be
   *             complete. You cannot provide only the changes.</p>
   * @public
   */
  newRuleContent: string | undefined;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
   *             information by using
   *             <a>GetPullRequest</a>.</p>
   * @public
   */
  existingRuleContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateContentOutput {
  /**
   * <p>Returns information about an approval rule template.</p>
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateDescriptionInput {
  /**
   * <p>The name of the template for which you want to update the description.</p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The updated description of the approval rule template.</p>
   * @public
   */
  approvalRuleTemplateDescription: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateDescriptionOutput {
  /**
   * <p>The structure and content of the updated approval rule template.</p>
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateNameInput {
  /**
   * <p>The current name of the approval rule template.</p>
   * @public
   */
  oldApprovalRuleTemplateName: string | undefined;

  /**
   * <p>The new name you want to apply to the approval rule template.</p>
   * @public
   */
  newApprovalRuleTemplateName: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateNameOutput {
  /**
   * <p>The structure and content of the updated approval rule template.</p>
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * <p>You cannot modify or delete this comment. Only comment authors can modify or delete their comments.</p>
 * @public
 */
export class CommentNotCreatedByCallerException extends __BaseException {
  readonly name: "CommentNotCreatedByCallerException" = "CommentNotCreatedByCallerException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommentNotCreatedByCallerException, __BaseException>) {
    super({
      name: "CommentNotCreatedByCallerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommentNotCreatedByCallerException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateCommentInput {
  /**
   * <p>The system-generated ID of the comment you want to update. To get this ID, use <a>GetCommentsForComparedCommit</a>
   *             or <a>GetCommentsForPullRequest</a>.</p>
   * @public
   */
  commentId: string | undefined;

  /**
   * <p>The updated content to replace the existing content of the comment.</p>
   * @public
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface UpdateCommentOutput {
  /**
   * <p>Information about the updated comment.</p>
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * <p>Represents the input of an update default branch operation.</p>
 * @public
 */
export interface UpdateDefaultBranchInput {
  /**
   * <p>The name of the repository for which you want to set or change the default branch.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch to set as the default branch.</p>
   * @public
   */
  defaultBranchName: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalRuleContentInput {
  /**
   * <p>The system-generated ID of the pull request.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the approval rule you want to update.</p>
   * @public
   */
  approvalRuleName: string | undefined;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
   *             information by using
   *             <a>GetPullRequest</a>.</p>
   * @public
   */
  existingRuleContentSha256?: string | undefined;

  /**
   * <p>The updated content for the approval rule.</p>
   *          <note>
   *             <p>When you update the content of the approval rule, you can specify approvers in an
   *                 approval pool in one of two ways:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>CodeCommitApprovers</b>: This option only
   *                         requires an Amazon Web Services account and a resource. It can be used for both IAM users
   *                         and federated access users whose name matches the provided resource name.
   *                         This is a very powerful option that offers a great deal of flexibility. For
   *                         example, if you specify the Amazon Web Services account <i>123456789012</i>
   *                         and <i>Mary_Major</i>, all of the following are counted as
   *                         approvals coming from that user:</p>
   *                   <ul>
   *                      <li>
   *                         <p>An IAM user in the account
   *                                 (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
   *                      </li>
   *                      <li>
   *                         <p>A federated user identified in IAM as Mary_Major
   *                                 (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
   *                      </li>
   *                   </ul>
   *                   <p>This option does not recognize an active session of someone assuming the
   *                         role of CodeCommitReview with a role session name of
   *                             <i>Mary_Major</i>
   *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
   *                         unless you include a wildcard (*Mary_Major).</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>Fully qualified ARN</b>: This option allows
   *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
   *                         user or role. </p>
   *                </li>
   *             </ul>
   *             <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *                     Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          </note>
   * @public
   */
  newRuleContent: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalRuleContentOutput {
  /**
   * <p>Information about the updated approval rule.</p>
   * @public
   */
  approvalRule: ApprovalRule | undefined;
}

/**
 * <p>The state for the approval is not valid. Valid values include APPROVE and REVOKE. </p>
 * @public
 */
export class InvalidApprovalStateException extends __BaseException {
  readonly name: "InvalidApprovalStateException" = "InvalidApprovalStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApprovalStateException, __BaseException>) {
    super({
      name: "InvalidApprovalStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApprovalStateException.prototype);
  }
}

/**
 * <p>The number of approvals required for the approval rule exceeds the maximum number allowed.</p>
 * @public
 */
export class MaximumNumberOfApprovalsExceededException extends __BaseException {
  readonly name: "MaximumNumberOfApprovalsExceededException" = "MaximumNumberOfApprovalsExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumNumberOfApprovalsExceededException, __BaseException>) {
    super({
      name: "MaximumNumberOfApprovalsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumNumberOfApprovalsExceededException.prototype);
  }
}

/**
 * <p>The approval cannot be applied because the user approving the pull request matches the user who created the pull request. You cannot approve a pull
 *         request that you created.</p>
 * @public
 */
export class PullRequestCannotBeApprovedByAuthorException extends __BaseException {
  readonly name: "PullRequestCannotBeApprovedByAuthorException" = "PullRequestCannotBeApprovedByAuthorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullRequestCannotBeApprovedByAuthorException, __BaseException>) {
    super({
      name: "PullRequestCannotBeApprovedByAuthorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullRequestCannotBeApprovedByAuthorException.prototype);
  }
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalStateInput {
  /**
   * <p>The system-generated ID of the pull request.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the revision.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The approval state to associate with the user on the pull request.</p>
   * @public
   */
  approvalState: ApprovalState | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestDescriptionInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The updated content of the description for the pull request. This content replaces the
   *             existing description.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestDescriptionOutput {
  /**
   * <p>Information about the updated pull request.</p>
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * <p>The pull request status update is not valid. The only valid update is from <code>OPEN</code> to <code>CLOSED</code>.</p>
 * @public
 */
export class InvalidPullRequestStatusUpdateException extends __BaseException {
  readonly name: "InvalidPullRequestStatusUpdateException" = "InvalidPullRequestStatusUpdateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPullRequestStatusUpdateException, __BaseException>) {
    super({
      name: "InvalidPullRequestStatusUpdateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPullRequestStatusUpdateException.prototype);
  }
}

/**
 * <p>A pull request status is required, but none was provided.</p>
 * @public
 */
export class PullRequestStatusRequiredException extends __BaseException {
  readonly name: "PullRequestStatusRequiredException" = "PullRequestStatusRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullRequestStatusRequiredException, __BaseException>) {
    super({
      name: "PullRequestStatusRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullRequestStatusRequiredException.prototype);
  }
}

/**
 * @public
 */
export interface UpdatePullRequestStatusInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The status of the pull request. The only valid operations are to update the status
   *             from <code>OPEN</code> to <code>OPEN</code>, <code>OPEN</code> to <code>CLOSED</code> or
   *             from <code>CLOSED</code> to <code>CLOSED</code>.</p>
   * @public
   */
  pullRequestStatus: PullRequestStatusEnum | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestStatusOutput {
  /**
   * <p>Information about the pull request.</p>
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestTitleInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The updated title of the pull request. This replaces the existing title.</p>
   * @public
   */
  title: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestTitleOutput {
  /**
   * <p>Information about the updated pull request.</p>
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * <p>Represents the input of an update repository description operation.</p>
 * @public
 */
export interface UpdateRepositoryDescriptionInput {
  /**
   * <p>The name of the repository to set or change the comment or description for.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.</p>
   * @public
   */
  repositoryDescription?: string | undefined;
}

/**
 * <p>A KMS encryption key ID is required but was not specified.</p>
 * @public
 */
export class EncryptionKeyRequiredException extends __BaseException {
  readonly name: "EncryptionKeyRequiredException" = "EncryptionKeyRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionKeyRequiredException, __BaseException>) {
    super({
      name: "EncryptionKeyRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionKeyRequiredException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateRepositoryEncryptionKeyInput {
  /**
   * <p>The name of the repository for which you want to update the KMS encryption key used to encrypt and decrypt the repository.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The ID of the encryption key. You can view the ID of an encryption key in the KMS console, or use the KMS APIs to
   *             programmatically retrieve a key ID. For more information about acceptable values for keyID, see
   *             <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html#KMS-Decrypt-request-KeyId">KeyId</a> in the Decrypt API description in
   *         the <i>Key Management Service API Reference</i>.</p>
   * @public
   */
  kmsKeyId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryEncryptionKeyOutput {
  /**
   * <p>The ID of the repository.</p>
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * <p>The ID of the encryption key.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The ID of the encryption key formerly used to encrypt and decrypt the repository.</p>
   * @public
   */
  originalKmsKeyId?: string | undefined;
}

/**
 * <p>Represents the input of an update repository description operation.</p>
 * @public
 */
export interface UpdateRepositoryNameInput {
  /**
   * <p>The current name of the repository.</p>
   * @public
   */
  oldName: string | undefined;

  /**
   * <p>The new name for the repository.</p>
   * @public
   */
  newName: string | undefined;
}
