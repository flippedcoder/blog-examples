export const standard = defineScenario({
  layout: {
    one: {
      name: 'String',
      dataLocation: 'String',
      imageUrl: 'String',
      user: { create: { name: 'String' } },
    },

    two: {
      name: 'String',
      dataLocation: 'String',
      imageUrl: 'String',
      user: { create: { name: 'String' } },
    },
  },
})
