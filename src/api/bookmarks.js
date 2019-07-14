import request from '@/utils/request'

export function fetchAllBookmarks () {
  return request({
    url: 'https://www.easy-mock.com/mock/5d2b3ecd4d05c12221f0d2f3/api/sites',
    method: 'get'
  })
}
