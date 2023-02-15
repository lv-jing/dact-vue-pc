import request from '@/utils/request'
// 项目空间列表
export const getProjectSpaceList = () => {
  return request({
    url: 'projectSpace/',
    method: 'get'
  })
}
// 项目列表
export const getProjects = () => {
  return request({
    url: 'projects/',
    method: 'get'
  })
}
// 项目信息
export const getProjectsInfor = (params) => {
  return request({
    url: 'projects/projectInformation',
    method: 'get',
    params
  })
}
// 对象定义
export const getProjectSystem = (params) => {
  return request({
    url: 'projectSystem/',
    method: 'get',
    params
  })
}
