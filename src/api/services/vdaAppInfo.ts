import apiClient from '@/api/index.ts';
import type {vdaAppInfoRS} from '@/api/models/vdaAppInfoRS.ts';

export const vdaAppInfo = {
  async GetAppInfo(): Promise<vdaAppInfoRS> {
    const response = await apiClient.get<vdaAppInfoRS>('vdaAppInfoRSMock.json');
    return response.data;
  },
};