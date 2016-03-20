var genders = [];

var Gender = function(name, pronoun, possessive, referential, variableName) {
    this.name = name;
    this.he = pronoun;
    this.his = possessive;
    this.himself = referential;
    this.variableName = variableName;
    genders.push(this.name);
}