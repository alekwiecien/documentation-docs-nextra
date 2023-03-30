export default function handler(req, res) {
res.status(200).json(
  { name: 'John Doe',
   bio: 'I am a software engineer, I love to code and I am a big fan of JavaScript'
  })
}
