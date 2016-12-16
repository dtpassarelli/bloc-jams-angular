(function() {
     function AlbumCtrl() {
     	this.albumArt = "/assets/images/album_covers/01.png";
     	this.name = "Turn the Music Up!";
     	this.artist = "Turn the Music Up!";
     	this.yearOfLabel = "Turn the Music Up!";
     	this.albums = [];
     	for (var i=0; i < 12; i++) {
         	this.albums.push(angular.copy(albumPicasso));
     	}
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();