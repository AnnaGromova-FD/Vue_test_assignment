<template>
  <div class="form-control">
    <label for="firstName">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      type="text"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
  required: {
    default: true,
  },
});
</script>

<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
  flex: 8;
}
label {
  font-size: 16px;
  line-height: 24px;
  color: #3d3d3d;
}
input {
  width: 278.05px;
  height: 40px;
  text-transform: capitalize;
  color: #c4c4c4;
  background: #f8f8f8;
  border-radius: 10px;
  border: none;
  padding: 9px 11px;
}
</style>
