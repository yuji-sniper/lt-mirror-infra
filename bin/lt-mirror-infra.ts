#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LtMirrorInfraStack } from '../lib/lt-mirror-infra-stack';

const app = new cdk.App();
new LtMirrorInfraStack(app, 'LtMirrorInfraStack');
