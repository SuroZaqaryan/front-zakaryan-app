<template>
  <div class="elems">
    <v-draggable-treeview v-model="items" group="hoge">

      <template v-slot:label="{ item }">
        <span class="elems_name">{{ item.name }}</span>

        <ul class="d-flex align-center category_elems">
          <li v-for="(hashtag, idx) in item.tags" :key="idx" class="m-0">
            {{ hashtag }}
          </li>
          <li v-for="(color, idx) in item.colors" :key="idx" class="colors" :class="color"> </li>
          <ul class="d-flex align-center category_status">
            <p v-if="item.status">Обязательный</p>
          </ul>
        </ul>
      </template>
    </v-draggable-treeview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Тестовое задание для кандидата',
          tags: ['Россия,', 'Белоруссия,', 'Украина,', 'Администратор филиала', 'повар-сушист']
        },
        {name: 'Трудовой договор', tags: [], colors: ['blue', 'gray']},
        {name: 'Мед. книжка', tags: [], colors: []},
      ]
    }
  }
}
</script>

<style>
.elems {
  width: 60%;
}

.elems .v-treeview-node__label {
  display: flex;
  align-items: center;
}

.elems .elems_name {
  padding: 5px;
  outline: none;
  font-weight: 600;
  color: #000000;
  font-size: 15px;
}

.elems .v-treeview-node {
  border: 1px solid #d3d8df;
}

.elems .v-treeview-node:not(:last-child) {
  border-bottom: 0;
}

.elems .v-treeview-node__level {
  display: none;
}

.elems .v-treeview-node__label ul li {
  list-style-type: none;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  padding-right: 6px;
  color: #b0b6bf;
}

.elems .colors {
  list-style-type: none;
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 100%;
  transition: 0.2s;
  margin: 0 3px;
}
</style>