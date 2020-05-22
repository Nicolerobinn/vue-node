
let demoList = {
    status: 200,
    message: 'success',
    data: {
      total: 100,
      'rows|10': [{
        id: '@guid',
        name: '@cname',
        'age|20-30': 23,
        'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
      }]
    }
  };
  export default {
      'get|/parameter/query': demoList
  }