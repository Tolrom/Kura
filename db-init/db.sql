-- Database creation 

CREATE DATABASE IF NOT EXISTS kura;

USE kura;

-- Tables creation

CREATE TABLE IF NOT EXISTS `user` (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_email VARCHAR(50) UNIQUE NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_xp INT DEFAULT 0,
    is_admin TINYINT(1) DEFAULT 0,
    is_private TINYINT(1) DEFAULT 0,
    date_joined DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS preference (
    user_id INT PRIMARY KEY,
    is_enabled TINYINT(1) DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES `user`(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `event` (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS notification (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    event_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_seen TINYINT(1) DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES `user`(user_id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES `event`(event_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS game (
    game_id INT AUTO_INCREMENT PRIMARY KEY,
    game_title VARCHAR(100) NOT NULL,
    game_release_date DATE,
    game_developer VARCHAR(50),
    game_api_source VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS platform (
    platform_id INT AUTO_INCREMENT PRIMARY KEY,
    platform_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS genre (
    genre_id INT AUTO_INCREMENT PRIMARY KEY,
    genre_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS tag (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(50) UNIQUE NOT NULL,
    tag_description TEXT
);

CREATE TABLE IF NOT EXISTS stat (
    user_id INT,
    game_id INT,
    playtime DECIMAL(6,1) DEFAULT 0,
    achievements INT DEFAULT 0,
    verified TINYINT(1) DEFAULT 0,
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, game_id),
    FOREIGN KEY (user_id) REFERENCES `user`(user_id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES game(game_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS follow (
    follower_id INT,
    followed_id INT,
    date_followed DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follower_id, followed_id),
    FOREIGN KEY (follower_id) REFERENCES `user`(user_id) ON DELETE CASCADE,
    FOREIGN KEY (followed_id) REFERENCES `user`(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS game_platform (
    game_id INT,
    platform_id INT,
    PRIMARY KEY (game_id, platform_id),
    FOREIGN KEY (game_id) REFERENCES game(game_id) ON DELETE CASCADE,
    FOREIGN KEY (platform_id) REFERENCES platform(platform_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS game_genre (
    game_id INT,
    genre_id INT,
    PRIMARY KEY (game_id, genre_id),
    FOREIGN KEY (game_id) REFERENCES game(game_id) ON DELETE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genre(genre_id) ON DELETE CASCADE
);
