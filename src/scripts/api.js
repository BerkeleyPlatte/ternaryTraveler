function getPlaces() {
  return fetch("http://localhost:8088/places").then(places => places.json());
}

function getInterests() {
  return fetch("http://localhost:8088/interests").then(interests =>
    interests.json()
  );
}

function saveInterest(int) {
  return fetch("http://localhost:8088/interests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(int)
  });
}

function deleteInterest(num) {
  return fetch(`http://localhost:8088/interests/${num}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

export { getPlaces, getInterests, saveInterest, deleteInterest };
