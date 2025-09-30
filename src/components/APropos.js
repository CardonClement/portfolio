import React from "react";

export default function APropos() {
  return (
    <section id="APropos">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Bonjour, moi c'est Clément.
            <br className="hidden lg:inline-block" /> Je suis en formation pour devenir developpeur.
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            J'ai toujours été passionné par le developpement. Issu d'un BAC Sciences et Technologies
            de l'Industrie et du Developpement Durable spécialité Systèmes d'Informations et Numériques (Mention très bien)
            puis d'un Bachelor Universitaire de Technologie spécialité Informatique - Développement application/web, 
            j'ai la conviction de pouvoir répondre à vos attentes. 
            <br></br> Ayant conclut un contrat d'alternance pour une durée de 19 mois (02/23 -> 08/24) avec la société Lenrek Informatique en 
            développement Java/SQL, puis un stage de 8 semaines dans une auto-entreprise pour un projet d'application 
            full-stack React Native/AdonisJS/PostgreSQL Dockerisée (projet réalisé from scratch), 
            je suis actuellement en Master informatique - spécialité Ingénieurie Logicielle pour l'Internet (ILI)
            à la Faculté des Sciences Jean Perrin.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Me contacter
            </a>
            <a
              href="#Projets"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Voir mes projets
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Moi"
            src="./photo.png"
          />
        </div>
      </div>
    </section>
  );
}