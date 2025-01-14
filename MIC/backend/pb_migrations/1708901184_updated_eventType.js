/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bz75y0zodk5rtne")

  collection.name = "EventType"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bz75y0zodk5rtne")

  collection.name = "eventType"

  return dao.saveCollection(collection)
})
