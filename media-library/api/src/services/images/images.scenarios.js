export const standard = defineScenario({
  image: {
    one: {
      name: 'String',
      url: 'String',
      user: { create: { username: 'String' } },
    },

    two: {
      name: 'String',
      url: 'String',
      user: { create: { username: 'String' } },
    },
  },
})
