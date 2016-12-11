(function() {
     function AlbumCtrl(Fixtures) {
     	this.albumArt = "/assets/images/album_covers/01.png";
     	this.name = "Turn the Music Up!";
     	this.artist = "Turn the Music Up!";
     	this.yearOfLabel = "Turn the Music Up!";
     	this.albums = [];
     	this.albumData = Fixtures.getAlbum();
     	
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();