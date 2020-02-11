<template>
  <div class="right_root">
      <div class="right">
          <right-module v-if="rightItems.length>0"
              :setting="rightItems[0]">
              <template v-slot:default>
                <div class="insert">
                    <h3 class="king">误杀</h3>
                    <span class="point red">670.09万</span>
                </div>
              </template>
          </right-module>
           <right-module v-if="rightItems.length>0"
              :setting="rightItems[1]">
              <template v-slot:default>
                <div class="insert">
                    <h3 class="king">霸王别姬</h3>
                    <span class="point">9.5分</span>
                </div>
              </template>
          </right-module>
           <right-module v-if="rightItems.length>0"
              :setting="rightItems[2]" :flag="true">
              <template v-slot:default>
                <div class="insert">
                    <div class="slot">陈数参加老公赵胤胤音乐会，优雅女人和完美钢琴家，简直绝配</div>
                </div>
              </template>
          </right-module>
      </div>
  </div>
</template>

<script>
import RightModule from './rightModule.vue'
import axios from 'axios'
export default {
  data() {
    return {
        rightItems:[
            {
                "title":"今日票房",
                "color":"#ef4238",
                "pic":"https://p1.meituan.net/movie/3b53e86bdaeda865196600eba2cadeee1718081.jpg@120w_80h_1e_1c",
                "icon":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR0QA/wD/AP+gvaeTAAAC4ElEQVRIx92VTYscVRSGn1P39qS6E7vbEZ1ROjMxaTMoImHETIQoRHAjbrIw4HYWwa2/wJ+QVUAkiDshwiyMDEgkYVT8jE0WYcJAhCQ9JKOmp6e/UlXdde/JotXY89GtkSz0QEFRdc9zTr3vPXWl/toR5SFE8DCg/02w3fxAvUeNQa0FZES6ImmKOIcEwc5g9R7dd4DsW29jpqaRbHY4NopwN28QffIxXP95AH7/ThUNQ3LzJ8E5kqWL2NIUmQPPbHvZ0hTJ0kVwjtz8STQMQXUbMECYw0xMEp9bwK/dAhkihQh+7RbxuQXMxCSEuSHmpT200yGYfApNEvB+Z7D3aJL013Y6kPZ2AIsg7RbJ0gXC4ycw+8tor7uzvr0uZn+Z8PgJkqULSLs18IUD5okIvcVP0W5CZvYwrlolODgDdtPmSVNctYotHyQ5v0j6xecEm2STLSOtincOtRmkUCQ7/w7ZN96EPxz3nmjxM6IP30cbG0jaIzBmix9bB0SEwFoMSlC/Q3TmNEnl0p+vk8olojOnCep3+mus3dbk4ZMXGKReI144i8YxGsfEC2eReg0CMzTVMiLEWNzKMn69BoBbWSYwI9NGg/Eebbdwa7f7FrRb/W1o/kXHCuj009jyDEGh2E84egx3bQVZvTn0TzK8YxEkl0OjDp2PPugXcw7J5fqGqT4YWFTRq1dQ1fsM+b3gCJ3/lnkPEv+DE+SvoeBT1Wbi9EbTpZcB8sYe2mVk2orkZUhjW8BONeqq/tJx/sp6r1dZjbs//NRsL39db/4KcPTR/BMv5vc8VwrHDo9nMrO7TfD8mMiEERk4bqR2bC5JlUbk/bVGmlZ+66Y/Xu3cvVxptqvnaxsbpXCX/26jOVD8SDHPapwErz9WLM7m9+x9dnfu0ONj9qWCtbPZIChboSDfzL3wXjXufv9to7Xy1Xrz9qvjhfjU9dV/pOe7+0p8ud4IXxnPP/ly4ZGZveHY3D3KzjdbTNAgKwAAAABJRU5ErkJggg==)",
                "list":[
                    {
                        "content":"叶问4：完结篇",
                        "other":"463.63万"
                    },
                    {
                        "content":"宠爱",
                        "other":"451.01万"
                    },
                    {
                        "content":"变身特工",
                        "other":"235.19万"
                    },
                    {
                        "content":"动物特工局",
                        "other":"111.66万"
                    },
                    {
                        "content":"灭绝",
                        "other":"99.01万"
                    },
                    {
                        "content":"美丽人生",
                        "other":"90.32万"
                    },
                    {
                        "content":"鲨海逃生",
                        "other":"42.33万"
                    },
                    {
                        "content":"半个喜剧",
                        "other":"34.22万"
                    }
                ]
            },
            {
                "other":"查看完整榜单",
                "title":"TOP 100",
                "color":"#ffb400",
                "pic":"https://p0.meituan.net/movie/45be438368bb291e501dc523092f0ac8193424.jpg@120w_80h_1e_1c",
                "icon":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR0QA/wD/AP+gvaeTAAACXElEQVRIx92UT0tUURiHn/fcewdN0QltQsMMrAbUSiRzUYG4cNM+gz5Bq9rVymjXskV9hDZtK2oREpSQfzBNk5RamJY6DTIjOt6Zufe8LQpSZxw1kqKzPud5H34v5yf6RJR9OGY/oP852KqDVefPgq015Gt6ydf0Yu3uXNydLqgqQUUHbssdAIKRT3iZN4jI3oytGkLroRZQJTD1mHgfTlUTTlUTJt5HYOpBFbX8uEvhkC3GSmhq0GM3Cdc+QGoIjlzFq+v59aCuh1z6BrkvDyHaiUYO4czfxyUNGwYURCGAiV3EqbmOzXxFIgfBbFiacfBOXEMbryDl9QQz9zB2FYyUMgaxPuovgjiYioai+YlXiXiVaHYZXXqKkXCTbdGMRX10fXFXmw+X32JWxykS8VawgObAn9+Zqha79BxjlylGLjQWILsENijJtZkFJPlia7TbgwE0m0DDbGlwcgDjzxSNoaRxKbCGWeziM4xm2I4shX2sBESx0S5wyoEidW1zmNQrXP22F/BPvC3d/2JKf2n3dx/udP5+H/8z4JJ9rIoNQlnx8zqbXjNjANUVtq3Mk0bX0SqR7cUKwKFlPZeXpVVfJpMrjM4lZWhw2k69nDAJgK5TGuuMm+aGWj1XW0V7ZZm2Rjw97BjKN3IkfCzZIJB0JicfU6s6mkgzPDlrxoZnmHs6EkkdjVk78N7fNPx8SxmfE8ZcOpuLdpykobXRtsWq6YhWSvuBiB53Xa2WiQfu7dmEDL6estP979yF7jOhf/eRB6zvMs1ybl3O0z/ulHWfDuouNJt4Y0w7vwMRnPnoHman9AAAAABJRU5ErkJggg==)",
                "list":[
                    {
                        "content":"肖申克的救赎",
                        "other":"9.5分"
                    },
                    {
                        "content":"这个杀手不太冷",
                        "other":"9.0分"
                    },
                    {
                        "content":"罗马假日",
                        "other":"9.1分"
                    },
                    {
                        "content":"泰坦尼克号",
                        "other":"8.9分"
                    },
                    {
                        "content":"唐伯虎点秋香",
                        "other":"8.8分"
                    },
                    {
                        "content":"乱世佳人",
                        "other":"9.2分"
                    },
                    {
                        "content":"魂断蓝桥",
                        "other":"8.4分"
                    },
                    {
                        "content":"天空之城",
                        "other":"9.6分"
                    }
                ]
            },
            {
                "title":"娱乐热点",
                "color":"#ef4238",
                "pic":"https://p0.meituan.net/moviemachine/16ebedf1d871fbc9a758f72a213712f740715.jpg@120w_72h_1e_1c",
                "list":[
                    {
                        "content":"范玮琪夫妇发红包，员工手拿钞票乐开花！"
                    },
                    {
                        "content":"杨振宁携小52岁老婆看展，97岁满面笑容健步如飞"
                    },
                    {
                        "content":"女排前队长魏秋月生子，郎平曾希望她生女儿，网友早把名字取好了"
                    },
                    {
                        "content":"萧亚轩带小16岁男友录节目，甜蜜互动撒狗粮，只"
                    },
                    {
                        "content":"知名博主秀1800万豪宅，自带空中泳池还有佣人房，网友：缺女友吗"
                    },
                    {
                        "content":"冰雪奇缘2获动画电影全球票房冠军，迪士尼再破纪录"
                    },
                    {
                        "content":"《唐人街探案3》曝终极预告，亚洲群星笑闹东京，"
                    },
                    {
                        "content":"《夺冠》IMAX “团魂版”专属海报，全画幅沉浸体验，首轮口碑炸裂开局"
                    }
                ]
            }
        ]
    }
  },
  components:{
      RightModule
  },
  created(){

  }
}

</script>
<style scoped>
.right_root{
    flex:1;
    display:flex;
    justify-content:flex-end;
}
.right{
    width:360px;
}
.insert{
    flex:1;
}
.king{
    font-size:18px;
    height:50px;
    line-height:50px;
    text-indent:10px;
    font-weight:normal;
}
.point{
    font-size: 14px;
    color: #ffb400;
    padding-left:10px;
}
.red{
    color: #ef4238;
}
.slot{
    margin-top:20px;
    font-size:14px;
    margin-left:10px;
}
</style>