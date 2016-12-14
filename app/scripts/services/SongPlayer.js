(function() {
     function SongPlayer($rootScope, Fixtures) {
        var SongPlayer = {};

        var currentAlbum = Fixtures.getAlbum();

        var stopSong = function() {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
        }; 

        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
         /**
 * @desc Buzz object audio file
 * @type {Object}
 */

        SongPlayer.currentSong = null;
        /**
 * @desc Current playback time (in seconds) of currently playing song
 * @type {Number}
 */
        SongPlayer.currentTime = null;

     	var currentBuzzObject = null;
     	 /**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */
     	 var setSong = function(song) {
		    if (currentBuzzObject) {
		        currentBuzzObject.stop();
		        currentSong.playing = null;
		    }
		 
		    currentBuzzObject = new buzz.sound(song.audioUrl, {
		        formats: ['mp3'],
		        preload: true
		    });

            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });
		 
		    currentSong = song;
		 };

		 var playSong = function() {
		 	currentBuzzObject.play();
         	song.playing = true; 

		 };


         SongPlayer.play = function(song) {
         	song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
         	  setSong(song);
         	  playSong();

         } else if (currentSong === song) {
                 if (currentBuzzObject.isPaused()) {
             		currentBuzzObject.play();
         		}
         	} 
     	};

     	SongPlayer.pause = function(song) {
		    song = song || SongPlayer.currentSong;
		    currentBuzzObject.pause();
		    song.playing = false;
 		};

        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if (currentSongIndex < 0) {
                stopSong();
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;

            if (currentSongIndex > 0) {
                stopSong();
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }

          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();