export const config = {
  api: {
    externalResolver: true,
  },
};

export default function handler(req, res) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.JOBS_KEY}`,
    },
  };
  fetch(
    `https://api.airtable.com/v0/appWq0aT7C7M3apm8/Jobs?view=Featured`,
    options
  )
    .then((response) => response.json())
    .then((usefulData) => {
      res.json(usefulData);
    })
    .catch((e) => {
      console.error(`An error occurred: ${e}`);
    });
}
