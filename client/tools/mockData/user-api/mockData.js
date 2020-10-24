const casual = require("casual");

const uuids = [
  "8009585d-a5a5-4c98-b278-d06512640ca1",
  "19f61569-fa51-4daa-87dc-3c3bd081911d",
  "5a147257-b426-47c2-97ab-69ee04715157",
  "bac854aa-abfc-463c-bc06-3a8e12bed30d",
  "18e726f0-2046-42b4-a175-f8b579d666a7"
]

casual.define("mockUser", function(uuid) {

  return {
    id: uuid,
    forename: casual.first_name,
    surname: casual.last_name,
    email: casual.email,
  }
})

const data = []

casual.define("userResponse", function() {
  for (let i = 0; i < 5; i++) {
    let user = casual.mockUser(uuids[i])
    data.push(user)
  }

  return {
    data: data
  }
})

const mockUser = casual.mockUser;

module.exports = { mockUser };