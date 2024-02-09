module.exports = {
  async up(queryInterface) {
    // Добавляем пользователей
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Alice Smith', email: 'alice@example.com', password: 'alice123', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Bob Johnson', email: 'bob@example.com', password: 'bob123', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Charlie Brown', email: 'charlie@example.com', password: 'charlie123', createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});

    // Добавляем альбомы для каждого пользователя
    const albums = [];
    for (let userId = 1; userId <= 3; userId++) {
      for (let i = 1; i <= 4; i++) {
        albums.push({
          a_name: `Album ${i} of User ${userId}`,
          author_id: userId,
          private: i % 2 === 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }
    await queryInterface.bulkInsert('Albums', albums, {});

    // Добавляем фотографии в каждый альбом
    const photos = [];
    let imageId = 1;
    for (let albumId = 1; albumId <= albums.length; albumId++) {
      for (let i = 1; i <= 5; i++) {
        photos.push({
          img: `https://rickandmortyapi.com/api/character/avatar/${imageId}.jpeg`,
          title: `Image ${imageId}`,
          album_id: albumId,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        imageId++;
      }
    }
    await queryInterface.bulkInsert('Photos', photos, {});

    // Добавляем доступы
    const accesses = [];
    for (let userId = 1; userId <= 3; userId++) {
      for (let albumId = 1; albumId <= albums.length; albumId++) {
        // Добавляем доступ ко всем альбомам, включая собственные
        accesses.push({
          user_id: userId,
          album_id: albumId,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }
    await queryInterface.bulkInsert('Accesses', accesses, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Accesses', null, {});
    await queryInterface.bulkDelete('Photos', null, {});
    await queryInterface.bulkDelete('Albums', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
