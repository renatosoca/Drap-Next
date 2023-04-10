
export const seedData = {
  entries: [
    {
      description: 'Pending Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'In Progress Lorem ipsum elit. Quisquam, quod.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Completed Lorem ipsum quod.',
      status: 'completed',
      createdAt: Date.now() - 100000,
    },
  ]
}