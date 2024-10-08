// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/emr-containers.json */

const u="required",
v="fn",
w="argv",
x="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i={[u]:false,"type":"String"},
j={[u]:true,"default":false,"type":"Boolean"},
k={[x]:"Endpoint"},
l={[v]:c,[w]:[{[x]:"UseFIPS"},true]},
m={[v]:c,[w]:[{[x]:"UseDualStack"},true]},
n={},
o={[x]:"Region"},
p={[v]:"getAttr",[w]:[{[x]:g},"supportsFIPS"]},
q={[v]:c,[w]:[true,{[v]:"getAttr",[w]:[{[x]:g},"supportsDualStack"]}]},
r=[l],
s=[m],
t=[o];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[v]:b,[w]:[k]}],rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:n,headers:n},type:e}],type:f},{conditions:[{[v]:b,[w]:t}],rules:[{conditions:[{[v]:"aws.partition",[w]:t,assign:g}],rules:[{conditions:[l,m],rules:[{conditions:[{[v]:c,[w]:[a,p]},q],rules:[{endpoint:{url:"https://emr-containers-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:r,rules:[{conditions:[{[v]:c,[w]:[p,a]}],rules:[{conditions:[{[v]:h,[w]:[o,"us-gov-east-1"]}],endpoint:{url:"https://emr-containers.us-gov-east-1.amazonaws.com",properties:n,headers:n},type:e},{conditions:[{[v]:h,[w]:[o,"us-gov-west-1"]}],endpoint:{url:"https://emr-containers.us-gov-west-1.amazonaws.com",properties:n,headers:n},type:e},{endpoint:{url:"https://emr-containers-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:s,rules:[{conditions:[q],rules:[{endpoint:{url:"https://emr-containers.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://emr-containers.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
