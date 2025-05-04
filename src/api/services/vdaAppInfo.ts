import apiClient from '@/api/index.ts';
import {vdaAppInfoRS} from '../models/vdaAppInfoRS';

export const UserService = {
  async GetAppInfo(): Promise<vdaAppInfoRS> {
    const response = await apiClient.get<vdaAppInfoRS>('/getAppInfo');
    return response.data;
  },
};