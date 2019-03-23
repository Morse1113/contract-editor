<template>
  <el-container>
    <el-aside v-show="leftAside" width="240px">
      <div class="left-header">
        <el-tooltip class="item" effect="dark" content="新增文件" placement="right">
          <el-button class="plus-file" type="primary" icon="el-icon-plus" circle @click="addFile"></el-button>
        </el-tooltip>
      </div>
      <el-menu
        :default-active="editorTab"
        class="el-menu-vertical-demo"
        background-color="#333333"
        text-color="#fff"
        active-text-color="#409EFF"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>智能合约</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="file in files" :index="file" :key="file" :name="file" @click="openFile">
              <el-row :gutter="20">
                <el-col :span="16">
                  <div class="grid-content bg-purple" style="overflow: hidden">
                    {{ file }}
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                    <i class="el-icon-edit" :id="file" @click="editFileName"></i>
                    <i class="el-icon-delete" :id="file" @click="deleteFile"></i>
                  </div>
                </el-col>
              </el-row>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <el-container>
        <el-header>
          <el-tabs v-model="editorTab" type="card" closable @tab-remove="removeTab" @tab-click="tabClick">
            <el-tab-pane v-for="file in fileTabs" :label="file" :key="file" :name="file">
            </el-tab-pane>
          </el-tabs>
        </el-header>
        <el-main>
          <code-editor ref="codeEditor"></code-editor>
        </el-main>
        <el-footer height="30%">
          {{ compileResult }}
        </el-footer>
      </el-container>
    </el-main>
    <el-aside v-show="rightAside" class="right" width="380px">
      <el-form :inline="true" class="compile-form">
        <el-form-item>
          <el-select v-model="compileFile" value="compiler" placeholder="请选择文件">
            <el-option v-for="file in files"
                       :key="file" :label="file" :value="file">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="compile" :loading="compiling">编译</el-button>
        </el-form-item>
      </el-form>
    </el-aside>
  </el-container>
</template>

<script>

  import CodeEditor from '../components/CodeEditor'
  import {compileContract} from "../../static/js/ContractCompile";

  export default {
    name: "EditorIndex",
    data() {
      return {
        leftAside: true,
        rightAside: true,
        files: [],
        fileTabs: [],
        editorTab: '',
        compileFile: '',
        compiling: false,
        compileResult: '123'
      }
    },
    components: {
      codeEditor: CodeEditor
    },
    watch: {
      files: {
        handler: function (newValue) {
          localStorage.setItem('files', JSON.stringify(newValue));
        },
        deep: true
      }
    },
    mounted() {
      let fileStr = localStorage.getItem('files');
      this.files = JSON.parse(fileStr);
      if (this.files == null || this.files.length === 0) {
        this.files = ['contract.sol'];
      }
      let defaultFile = this.files[0];
      this.editorFileChange(defaultFile);
      const _this = this;
      window.onresize = function () {
        let width = document.body.clientWidth;
        _this.leftAside = width > 800;
        _this.rightAside = width > 600;
      }
    },
    methods: {
      alertLang: function () {
        this.$notify({
          title: '当前语言',
          message: this.lang,
          type: 'success'
        });
      },
      compile: function () {
        this.compiling = true;
        if (this.compileFile === '') {
          this.$notify.error({
            title: '操作失败',
            message: '请选择正确的工程进行编译！'
          });
        } else {
          let code = localStorage.getItem(this.compileFile);
          compileContract(code).then(result => {
            this.compileResult = result;
          });
          this.$notify.success({
            title: '编译成功',
            message: '\"' + this.compileFile + '\"编译成功!'
          });
        }
        this.compiling = false;
      },
      addFile() {
        this.$prompt('请输入文件名（默认为.sol文件)', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: '',
          inputErrorMessage: '请输入正确的文件名！'
        }).then(({ value }) => {
          let newFile = value + '.sol';
          for (let index in this.files) {
            if (this.files[index] === newFile) {
              this.$message({
                type: 'info',
                message: newFile + '已存在！'
              });
              return;
            }
          }
          this.files.push(newFile);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      editFileName(index) {
        let fileName = index.target.id;
        this.$prompt('请输入文件名（默认为.sol文件)', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValue: fileName.split(".")[0],
          inputPattern: '',
          inputErrorMessage: '请输入正确的文件名！'
        }).then(({ value }) => {
          let newFile = value + '.sol';
          for (let index in this.files) {
            if (this.files[index] === newFile) {
              this.$message({
                type: 'info',
                message: newFile + '已存在！'
              });
              return;
            }
          }
          this.$set(this.files, this.files.indexOf(fileName), newFile);
          this.$set(this.fileTabs, this.fileTabs.indexOf(fileName), newFile);
          this.editorTab = newFile;
          localStorage.setItem(newFile, localStorage.getItem(fileName));
          localStorage.removeItem(fileName);
        });
      },
      deleteFile(index) {
        let fileName = index.target.id;
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.removeValue(this.files, fileName);
          localStorage.removeItem(fileName);
          this.removeTab(fileName);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      openFile(index) {
        this.editorFileChange(index.index)
      },
      tabClick(tab) {
        this.editorFileChange(tab.name)
      },
      removeTab(targetName) {
        let tabs = this.fileTabs;
        let activeName = this.editorTab;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab;
              }
            }
          });
        }
        this.editorTab = activeName;
        this.fileTabs = tabs.filter(tab => tab !== targetName);
        this.editorFileChange(activeName);
      },
      editorFileChange(fileName) {
        if (this.fileTabs.indexOf(fileName) < 0) {
          this.fileTabs.push(fileName);
        }
        this.editorTab = fileName;
        let code = localStorage.getItem(fileName);
        this.$refs.codeEditor.changeEditor(fileName, code == null ? '' : code);
        const splits = fileName.split(".");
        this.$refs.codeEditor.changeLang(splits[splits.length - 1]);
      },
      removeValue(arr, value) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === value) {
            arr.splice(i, 1);
            break;
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../styles/variable.less";

  .el-container, .el-aside, .el-main {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .el-aside {
    background-color: @base-color;
  }

  .el-menu {
    border-right-width: 0;
  }

  .el-main {
    background-color: #162a3c;
  }

  .el-tabs {
    margin-top: 19px;
  }

  .left-header {
    height: 40px;
    width: 40px;
    margin: 10px auto;
  }

  .compile-form {
    text-align: center;
    margin-top: 120px;
  }
</style>

<style>

  .el-dropdown {
    color: white;
  }

  .el-menu-item-group__title {
    display: none;
  }

  .el-tabs__item {
    color: white;
  }
</style>
