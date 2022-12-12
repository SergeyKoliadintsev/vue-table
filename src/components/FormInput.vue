<script setup lang="ts">
export interface IStatus {
  valid: boolean;
  message?: string;
}

defineProps<{
  name: string;
  modelValue: string;
  status: IStatus;
  type: string;
  plaseholder?: string;
}>();

const emit = defineEmits<{ (event: "update:modelValue", value: any): void }>();
function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", value);
}
</script>

<template>
  <div class="box">
    <label :for="name" class="label">{{ name }}</label>
    <div class="container-1">
      <span class="icon">
        <slot name="icon-left" />
      </span>
      <input
        :type="type"
        :id="name"
        class="input"
        :value="modelValue"
        @input="handleInput"
        :placeholder="plaseholder || ''"
      />
    </div>
    <p class="is-danger help" v-if="!status.valid">
      {{ status.message }}
    </p>
  </div>
</template>

<style>
.container-1 {
  width: 300px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
}

.box {
  position: relative;
}

.label {
  position: absolute;
  top: -25px;
}

.container-1 input {
  width: 245px;
  height: 40px;
  background: #ffffff;
  border: none;
  box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
  border-radius: 30px;
  font-size: 10pt;
  float: left;
  color: #63717f;
  padding-left: 45px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}

.container-1 input::-webkit-input-placeholder {
  color: #65737e;
}

.container-1 input:-moz-placeholder {
  /* Firefox 18- */
  color: #65737e;
}

.container-1 input::-moz-placeholder {
  /* Firefox 19+ */
  color: #65737e;
}

.container-1 input:-ms-input-placeholder {
  color: #65737e;
}

.container-1 .icon {
  position: absolute;
  top: -10px;
  margin-left: 17px;
  margin-top: 17px;
  z-index: 1;
  color: #4f5b66;
}

.container-1 input:hover,
.container-1 input:focus,
.container-1 input:active {
  outline: none;
  border: 2px solid #8934ff;
}
</style>
