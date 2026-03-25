<script setup>
import TodoParent from './components/01_component-props/TodoParent.vue';
import ColorEmitParent from './components/02_emit/ColorEmitParent.vue';
import EmitParent from './components/02_emit/EmitParent.vue';
import VmodelEmitParent from './components/02_emit/VmodelEmitParent.vue';
import NamedSlotChild from './components/03_slot-teleport/NamedSlotChild.vue';
import NamesSlotParent from './components/03_slot-teleport/NamesSlotParent.vue';
import SlotParent from './components/03_slot-teleport/SlotParent.vue';
import TeleportParent from './components/03_slot-teleport/TeleportParent.vue';
</script>

<template>
  <TeleportParent />
</template>

<style scoped></style>
