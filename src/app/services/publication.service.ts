export class PublicationService {

    mesPublications = [
        {
            name: "1ère publication",
            text: "Iam in altera philosophiae parte. quae est quaerendi ac disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem videtur, inermis ac nudus est. tollit definitiones, nihil de dividendo ac partiendo docet, non quo modo efficiatur concludaturque ratio tradit, non qua via captiosa solvantur ",
            nbLike: 0,
            nbDislike: 0
        },
        {
            name: "2ème publication",
            text: "Iam in altera philosophiae parte. quae est quaerendi ac disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem videtur, inermis ac nudus est. tollit definitiones, nihil de dividendo ac partiendo docet, non quo modo efficiatur concludaturque ratio tradit, non qua via captiosa solvantur ",
            nbLike: 0,
            nbDislike: 0

        },
        {
            name: "3ème publication",
            text: "Iam in altera philosophiae parte. quae est quaerendi ac disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem videtur, inermis ac nudus est. tollit definitiones, nihil de dividendo ac partiendo docet, non quo modo efficiatur concludaturque ratio tradit, non qua via captiosa solvantur ",
            nbLike: 0,
            nbDislike: 0
        }
    ];

    onLike(i: number) {
        this.mesPublications[i].nbLike++;
        console.log("Publication aimée, nombre like =" + this.mesPublications[i].nbLike +"\n \n");
       
    }

    onDislike(i: number) {
        this.mesPublications[i].nbDislike++;
        console.log("Publication dislike, nombre dislike =" + this.mesPublications[i].nbDislike +"\n \n");
       
    }

    getColor(i: number) {
        if (this.mesPublications[i].nbLike > this.mesPublications[i].nbDislike) {
            console.log("nombre dislike =" + this.mesPublications[i].nbDislike + " nombre like =" + this.mesPublications[i].nbLike);
            return "green";
        }
        else if (this.mesPublications[i].nbLike < this.mesPublications[i].nbDislike) {
            console.log("nombre dislike =" + this.mesPublications[i].nbDislike + " nombre like =" + this.mesPublications[i].nbLike);
            return "red";
        } 
    }

}