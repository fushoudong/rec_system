<template>
  <div class="model-container">
    <div>
      <el-card shadow="never" class="box-card">
        <el-button type="primary" size="small">选择模型</el-button>
        <!-- <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        <el-checkbox-group style="margin-left: 80px" v-model="selectedModels">
          <el-checkbox
            v-for="model in modelList"
            :label="model.name"
            :key="model.key"
            >{{ model.name }}</el-checkbox
          >
        </el-checkbox-group> -->
      </el-card>
    </div>
    <el-card
      shadow="never"
      class="show-part"
      style="height: 680px; padding-top: -10px; overflow:scroll"
    >
      <div slot="header" class="clearfix">
        <span>模型详情</span>
      </div>
      <div
        v-for="desc in originData"
        :key="desc.name"
        style="margin-bottom: 10px"
      >
        <div shadow="hover">
          <el-descriptions
            class="margin-top"
            :title="desc.name"
            :column="3"
            border
          >
            <el-descriptions-item>
              <template slot="label">
                模型名
              </template>
              {{ desc.name }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                train
              </template>
              {{ desc.train }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                test
              </template>
              {{ desc.test }}
            </el-descriptions-item>

            <el-descriptions-item>
              <template slot="label">
                alpha
              </template>
              <el-tag size="small">{{ desc.alpha }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                pop
              </template>
              <el-tag size="small">{{ desc.pop }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                con
              </template>
              <el-tag size="small">{{ desc.con }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                epoch
              </template>
              <el-tag size="small">{{ desc.epoch }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                batch_size
              </template>
              <el-tag size="small">{{ desc.batch_size }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                log_interval
              </template>
              <el-tag size="small">{{ desc.log_interval }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                cuda
              </template>
              <el-tag size="small">{{ desc.cuda }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                saveID
              </template>
              <el-tag size="small">{{ desc.saveID }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                save_flag
              </template>
              <el-tag size="small">{{ desc.save_flag }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                model
              </template>
              <el-tag size="small">{{ desc.model }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                regs
              </template>
              <el-tag size="small">{{ desc.regs }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                embed_size
              </template>
              <el-tag size="small">{{ desc.embed_size }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                Ks
              </template>
              <el-tag size="small">{{ desc.Ks }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                need_save
              </template>
              <el-tag size="small">{{ desc.need_save }}</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </el-card>
    <el-card shadow="never" class="box-card">
      <span class="i-label">选择指标</span>
      <el-select
        style="margin-left: 80px; width: 500px"
        v-model="selectedIns"
        size="small"
        multiple
        placeholder="请选择"
       
      >
        <el-option
          v-for="(model, index) in inList"
          :label="model"
          :key="'i' + index"
          :value="'i' + index"
        >
        </el-option>
      </el-select>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ModelMain",
  data() {
    return {
      selectedModels: [],
      modelList: [
        {
          name: "TACI",
          key: "m0",
          train: "TA_1",
          test: "TA_2",
          alpha: "0.001",
          pop: "0.7",
          con: 0.1,
          early_stop: 1,
          epoch: 2000,
          batch_size: 2048,
          log_interval: 10,
          cuda: 1,
          saveID: 1,
          save_flag: 1,
          model: "mf",
          regs: 1e-5,
          embed_size: 64,
          Ks: "[20,50]",
          need_save: 1
        }
      ],
      inList: ["ndcg", "recall", "precision", "hit_ratio", "f1_score", "apt"],
      selectedIns: ["ndcg"]
    };
  },
  methods: {
    initModelList() {
      const initIndex = ["m0"];
      this.modelList.forEach(model => {
        if (initIndex.findIndex(index => model.key === index) !== -1) {
          this.selectedModels.push(model.name);
        }
      });
    }
  },
  created() {
    this.initModelList();
  },
  computed: {
    originData() {
      const dataList = [];
      this.selectedModels.forEach(model => {
        const data = this.modelList.find(mo => mo.name == model);
        if (data != undefined) {
          dataList.push(data);
        }
      });
      return dataList;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.model-container {
  padding: 20px;
}
.show-part {
  width: 1000px;
  margin-top: 20px;
}
.box-card {
  padding: 20px;
  display: flex;
}
.select-label {
  position: absolute;
  top: 110px;
}
.i-label {
  position: absolute;
  top: 896px;
}
</style>
