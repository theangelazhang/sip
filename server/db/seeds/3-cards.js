exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cards').then(function () {
    // Inserts seed entries
    return knex('cards').insert([
      {
        id: 1,
        category_id: 1,
        user_id: 1,
        name: 'Save one hundred dollars every week',
        description: 'Make sure to keep it in savings account',
        date_created: 1660694092000,
        period: 604800000,
        location: 'Everywhere',
        completed: true,
        total_count: 0,
        comp_count: 20,
      },
      {
        id: 2,
        category_id: 2,
        user_id: 2,
        name: 'Drink water',
        description: 'Drink 2L of water every day',
        date_created: 1660694092000,
        period: 86400000,
        location: 'Everywhere',
        completed: false,
        total_count: 0,
        comp_count: 0,
      },
      {
        id: 3,
        category_id: 2,
        user_id: 2,
        name: 'Eat meals',
        description: 'Eat at least two meals every day',
        date_created: 1660694092000,
        period: 86400000,
        location: 'Everywhere',
        completed: false,
        total_count: 0,
        comp_count: 0,
      },
      {
        id: 4,
        category_id: 1,
        user_id: 1,
        name: 'Invest 25% of my income',
        description: 'Invest in the stock market',
        date_created: 1660694092000,
        period: 604800000,
        location: 'Everywhere',
        completed: false,
        total_count: 0,
        comp_count: 30,
      },
      {
        id: 5,
        category_id: 2,
        user_id: 2,
        name: 'Meditate',
        description: 'Meditate for at least 10 minutes every day',
        date_created: 1660694092000,
        period: 86400000,
        location: 'Everywhere',
        completed: false,
        total_count: 0,
        comp_count: 0,
      },
      {
        id: 6,
        category_id: 1,
        user_id: 1,
        name: 'Reduce expenses',
        description: 'Reduce my monthly expenses by 10%',
        date_created: 1660694092000,
        period: 2592000000,
        location: 'Everywhere',
        completed: false,
        total_count: 0,
        comp_count: 5,
      },
      {
        id: 7,
        category_id: 2,
        user_id: 2,
        name: 'Exercise',
        description: 'Exercise for at least 30 minutes every day',
        date_created: 1660694092000,
        period: 86400000,
        location: 'Gym',
        completed: false,
        total_count: 0,
        comp_count: 0,
      },
      {
        id: 8,
        category_id: 5,
        user_id: 1,
        name: 'Read books',
        description: 'Read at least 1 book every month',
        date_created: 1660694092000,
        period: 2592000000,
        location: 'Home',
        completed: false,
        total_count: 0,
        comp_count: 3,
      },
      {
        id: 9,
        category_id: 2,
        user_id: 2,
        name: 'Write in journal',
        description: 'Write in my journal for at least 10 minutes every day',
        date_created: 1660694092000,
        period: 86400000,
        location: 'Home',
        completed: false,
        total_count: 0,
        comp_count: 0,
      },
      {
        id: 10,
        category_id: 5,
        user_id: 1,
        name: 'Learn new skill',
        description: 'Learn a new skill every month',
        date_created: 1660694092000,
        period: 2592000000,
        location: 'Online',
        completed: false,
        total_count: 0,
        comp_count: 2,
      },
      {
        id: 11,
        category_id: 2,
        user_id: 2,
        name: 'Get enough sleep',
        description: 'Get at least 7 hours of sleep every night',
        date_created: 1660694092000,
        period: 86400000,
        location: 'Bedroom',
        completed: false,
        total_count: 0,
        comp_count: 0,
      },
      {
        id: 12,
        category_id: 1,
        user_id: 1,
        name: 'Track expenses',
        description: 'Track all of my expenses every day',
        date_created: 1660694092000,
        period: 86400000,
        location: 'Everywhere',
        completed: false,
        total_count: 0,
        comp_count: 40,
      },
      {
        id: 13,
        category_id: 1,
        user_id: 1,
        name: 'Click done every 15 seconds',
        description: 'Click click click',
        date_created: 1660694092000,
        period: 15000,
        location: 'Right here, right now',
        completed: true,
        total_count: 0,
        comp_count: 100000,
      },
    ])
  })
}
