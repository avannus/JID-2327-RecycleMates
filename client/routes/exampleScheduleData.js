const exampleSchedule = [
  {
    weekOf: 'April 24, 2023',
    days: [
      {
        dayOfWeek: 'Monday',
        timePeriod: '2 pm - 3 pm',
        numOfPickups: 2,
        addresses: [
          '783 Samantha Ln, Clarksville, TN 37040',
          '816R Bradley Blvd #R, Clarksville, TN 37042',
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        timePeriod: '9 am - 11 am',
        numOfPickups: 3,
        addresses: [
          '2801 Summertree Ln, Clarksville, TN 37040',
          '1528 Osage Ct, Clarksville, TN 37042',
          '1736 Hazelwood Rd, Clarksville, TN 37042',
        ],
      },
    ],
  },
  {
    weekOf: 'May 1, 2023',
    days: [
      {
        dayOfWeek: 'Monday',
        timePeriod: '10 am - 11 am',
        numOfPickups: 2,
        addresses: ['555 Main St, Clarksville, TN 37042'],
      },
      {
        dayOfWeek: 'Tuesday',
        timePeriod: '1 pm - 2 pm',
        numOfPickups: 3,
        addresses: [
          '777 Maple Ave, Hopkinsville, KY 42240',
          '222 Pine St, Fort Campbell, KY 42223',
          '333 Oak St, Oak Grove, KY 42262',
        ],
      },
      {
        dayOfWeek: 'Thursday',
        timePeriod: '3 pm - 4 pm',
        numOfPickups: 2,
        addresses: [
          '444 Elm St, Oak Grove, KY 42262',
          '999 Maple Ave, Hopkinsville, KY 42240',
        ],
      },
    ],
  },
];

export default exampleSchedule;
