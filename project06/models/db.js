const fs = require('fs/promises');

function getList() {
  return fs.readFile('./models/data.json').then(JSON.parse);
}

function writeList(data) {
  return fs.writeFile('./models/data.json', JSON.stringify(data, null, 2));
}

function addList(title) {
  return getList().then((list) => {
    list.push(title);
    writeList(list);
    return list;
  });
}

function editList(idx, title) {
  return getList().then((list) => {
    list[idx] = title;
    writeList(list);
    return list;
  });
}

function deleteList(idx) {
  return getList().then((list) => {
    list.splice(idx, 1);
    writeList(list);
    return list;
  });
}

function searchList(keyword) {
  return getList().then((list) => {
    return list.filter(el.to);
  });
}

module.exports = { getList, writeList, addList, editList, deleteList };
