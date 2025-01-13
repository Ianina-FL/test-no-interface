const db = require('../models');
const Users = db.users;

const Activities = db.activities;

const Contacts = db.contacts;

const Leads = db.leads;

const Metrics = db.metrics;

const Notes = db.notes;

const ActivitiesData = [
  {
    description: 'Andreas Vesalius',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'J. Robert Oppenheimer',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Arthur Eddington',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Francis Galton',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Louis Victor de Broglie',

    start_time: new Date(),

    end_time: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ContactsData = [
  {
    first_name: 'Carl Gauss (Karl Friedrich Gauss)',

    last_name: 'Murray Gell-Mann',

    email: 'Andreas Vesalius',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Lynn Margulis',

    last_name: 'Galileo Galilei',

    email: 'Andreas Vesalius',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Edwin Hubble',

    last_name: 'Sigmund Freud',

    email: 'Edward Teller',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Hans Bethe',

    last_name: 'Linus Pauling',

    email: 'Alfred Binet',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Arthur Eddington',

    last_name: 'William Bayliss',

    email: 'J. Robert Oppenheimer',

    // type code here for "relation_many" field
  },
];

const LeadsData = [
  {
    name: 'Charles Darwin',

    status: 'Contacted',

    category: 'LowPriority',

    // type code here for "relation_one" field
  },

  {
    name: 'Ludwig Boltzmann',

    status: 'New',

    category: 'MediumPriority',

    // type code here for "relation_one" field
  },

  {
    name: 'Michael Faraday',

    status: 'Lost',

    category: 'LowPriority',

    // type code here for "relation_one" field
  },

  {
    name: 'Nicolaus Copernicus',

    status: 'New',

    category: 'HighPriority',

    // type code here for "relation_one" field
  },

  {
    name: 'Sigmund Freud',

    status: 'New',

    category: 'MediumPriority',

    // type code here for "relation_one" field
  },
];

const MetricsData = [
  {
    name: 'Edward Teller',

    value: 51.22,

    // type code here for "relation_one" field
  },

  {
    name: 'Claude Bernard',

    value: 36.47,

    // type code here for "relation_one" field
  },

  {
    name: 'Max Born',

    value: 20.19,

    // type code here for "relation_one" field
  },

  {
    name: 'Max Planck',

    value: 15.61,

    // type code here for "relation_one" field
  },

  {
    name: 'Francis Galton',

    value: 90.09,

    // type code here for "relation_one" field
  },
];

const NotesData = [
  {
    content: 'B. F. Skinner',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Carl Linnaeus',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Robert Koch',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Emil Kraepelin',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Trofim Lysenko',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

// Similar logic for "relation_many"

async function associateActivityWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setUser) {
    await Activity0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setUser) {
    await Activity1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setUser) {
    await Activity2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setUser) {
    await Activity3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity4 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Activity4?.setUser) {
    await Activity4.setUser(relatedUser4);
  }
}

async function associateActivityWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setLead) {
    await Activity0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setLead) {
    await Activity1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setLead) {
    await Activity2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setLead) {
    await Activity3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity4 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Activity4?.setLead) {
    await Activity4.setLead(relatedLead4);
  }
}

// Similar logic for "relation_many"

async function associateLeadWithOwner() {
  const relatedOwner0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOwner) {
    await Lead0.setOwner(relatedOwner0);
  }

  const relatedOwner1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOwner) {
    await Lead1.setOwner(relatedOwner1);
  }

  const relatedOwner2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOwner) {
    await Lead2.setOwner(relatedOwner2);
  }

  const relatedOwner3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setOwner) {
    await Lead3.setOwner(relatedOwner3);
  }

  const relatedOwner4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead4 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Lead4?.setOwner) {
    await Lead4.setOwner(relatedOwner4);
  }
}

async function associateMetricWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Metric0 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Metric0?.setUser) {
    await Metric0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Metric1 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Metric1?.setUser) {
    await Metric1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Metric2 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Metric2?.setUser) {
    await Metric2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Metric3 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Metric3?.setUser) {
    await Metric3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Metric4 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Metric4?.setUser) {
    await Metric4.setUser(relatedUser4);
  }
}

async function associateNoteWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setUser) {
    await Note0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setUser) {
    await Note1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setUser) {
    await Note2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setUser) {
    await Note3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note4 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Note4?.setUser) {
    await Note4.setUser(relatedUser4);
  }
}

async function associateNoteWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setLead) {
    await Note0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setLead) {
    await Note1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setLead) {
    await Note2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setLead) {
    await Note3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note4 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Note4?.setLead) {
    await Note4.setLead(relatedLead4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Activities.bulkCreate(ActivitiesData);

    await Contacts.bulkCreate(ContactsData);

    await Leads.bulkCreate(LeadsData);

    await Metrics.bulkCreate(MetricsData);

    await Notes.bulkCreate(NotesData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateActivityWithUser(),

      await associateActivityWithLead(),

      // Similar logic for "relation_many"

      await associateLeadWithOwner(),

      await associateMetricWithUser(),

      await associateNoteWithUser(),

      await associateNoteWithLead(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});

    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('leads', null, {});

    await queryInterface.bulkDelete('metrics', null, {});

    await queryInterface.bulkDelete('notes', null, {});
  },
};
