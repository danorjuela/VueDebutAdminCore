

export interface Common {
    appName:      string;
    description:  string;
    msalCliendId: string;
    gCliendId:    string;
}

export interface ThemeColor {
    colorShemaLigth: ColorShema;
    colorShemaDark:  ColorShema;
}

export interface ColorShema {
    light:     string;
    dark:      string;
    primary:   string;
    secondary: string;
    info:      string;
    accent1:   string;
    accent2:   string;
    accent3:   string;
    success:   string;
    warning:   string;
    danger:    string;
}

export interface User {
    name:         string;
    email:        string;
    permisions:   string[];
    rols:         string[];
    sidebar:      SidebarAdmin[];
    sidebarAdmin: SidebarAdmin;
}

export interface SidebarAdmin {
    name:       string;
    to?:        string;
    icon:       string;
    color:      string;
    childrens?: SidebarAdmin[];
}

export interface vdaAppInfoRS {
    common:     Common;
    themeColor: ThemeColor;
    user:       User;
}

