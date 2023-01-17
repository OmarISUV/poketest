import { client as PrismaClient } from "../../src/config/prisma.mjs";
import axios from 'axios';

// Random Pokemons Initials

// Add roles
const masterRol = await PrismaClient.rol.create({
  data: {
    key: "master",
    name: "Maestro",
  },
});

const trainerRol = await PrismaClient.rol.create({
  data: {
    key: "trainer",
    name: "Aprendiz",
  },
});

// Add first master user
await PrismaClient.user.create({
  data: {
    username: "omar",
    name: "omar",
    password: "$2b$10$1sTvRkjN1rHi2ybLFSkV5uXhFC4728EeposYzudz7d7CZmlhSqncS", // cqqzq
    rol: {
      connect: { id: masterRol.id },
    },
  },
});
