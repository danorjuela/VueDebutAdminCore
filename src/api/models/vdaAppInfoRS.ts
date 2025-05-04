import vdaAppInfoCommonRS from '@/api/models/vdaAppInfoCommonRS.ts'

export class vdaAppInfoRS {
  common:vdaAppInfoCommonRS
  userAuth:boolean
  constructor(common: vdaAppInfoCommonRS, userAuth:boolean) {
    this.common = common;
    this.userAuth = userAuth
  }
};

