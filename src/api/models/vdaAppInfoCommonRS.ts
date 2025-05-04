import vdaAppInfoThemeColorRS from '@/api/models/vdaAppInfoThemeColorRS.ts'

export class vdaAppInfoCommonRS  {
  appName:string
  description : string 
  msalCliendId: string
  gCliendId: string
  colorShemaLigth : vdaAppInfoThemeColorRS
  colorShemaDark : vdaAppInfoThemeColorRS
  constructor(appName: string, description:string,
    msalCliendId: string , gCliendId: string,
    colorShemaLigth : vdaAppInfoThemeColorRS, colorShemaDark: vdaAppInfoThemeColorRS
  ){
    this.appName = appName
    this.description = description
    this.msalCliendId = msalCliendId
    this.gCliendId = gCliendId
    this.colorShemaLigth = colorShemaLigth
    this.colorShemaDark = colorShemaDark
  }
};