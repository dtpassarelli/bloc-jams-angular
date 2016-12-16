(function() {
     function AlbumCtrl(Fixtures, SongPlayer) {
     	this.albumArt = "/assets/images/album_covers/01.png";
     	this.name = "Turn the Music Up!";
     	this.artist = "Turn the Music Up!";
     	this.yearOfLabel = "Turn the Music Up!";
     	this.albums = [];
     	this.albumData = Fixtures.getAlbum();
     	this.songPlayer = SongPlayer;
     	
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();