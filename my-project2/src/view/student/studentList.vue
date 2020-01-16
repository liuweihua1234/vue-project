<template>
  <div>
    <Table border :columns="columns7" :data="data6" :loading="loading"></Table>
    <Page :total="total" page-size="10" :current="current" />
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data () {
    return {
      columns7: [
        {
          title: '学生学号',
          key: 'stuId',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.stuId)
            ]);
          }
        },
        {
          title: '学生年龄',
          key: 'stuAge'
        },
        {
          title: '出生日期',
          key: 'stuBirthday'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ]);
          }
        }
      ],
      data6: [],
      loading: true,
      total: 10,
      current: 1
    };
  },

  components: {},

  computed: {},

  mounted () {
    this.test()
  },

  methods: {
    async test () {
      let res = await this.$api.student.list() // 只有成功才往下走
      this.loading = true;
      setTimeout(() => {
        this.loading = false
      }, 1000)
      this.data6 = res.data
    },
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1);
    }
  },

  watch: {}

}

</script>
<style scoped>
</style>