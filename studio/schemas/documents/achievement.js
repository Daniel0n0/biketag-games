export default {
  title: 'Achievement',
  name: 'achievement',
  type: 'document',
  fields: [
    {
      title: "Achievement",
      name: "slug",
      type: "slug",
      hidden: true,
      options: {
        source: 'name',
      },
    },
    {
      title: 'Achievement Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Achievement Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Achievement Key',
      name: 'key',
      type: 'string',
    },
    {
      title: 'Achievement Value',
      name: 'value',
      type: 'string',
    },
    {
      title: 'Achievement Group',
      name: 'group',
      type: 'string',
    },
  ],
}
