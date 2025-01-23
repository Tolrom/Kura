-- Créer des tables
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(255),
    release_date DATE
);

-- Insérer des données factices
INSERT INTO users (username, email) VALUES
('user1', 'user1@example.com'),
('user2', 'user2@example.com');

INSERT INTO games (title, genre, release_date) VALUES
('The Legend of Zelda', 'Adventure', '1986-02-21'),
('Super Mario Bros', 'Platformer', '1985-09-13');
