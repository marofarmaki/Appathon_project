# Appathon_project

Συχνά Φάρμακα για την αντιμετώπιση συγκεκριμένης ασθένειας


Θα φτιάξω μια δικτυακή εφαρμογή που θα βρίσκει τα 5 πιο συχνά φάρμακα που έχουν χορηγηθεί
για την αντιμετώπιση μιας συγκεκριμένης ασθένειας. Το input θα είναι το όνομα της ασθένειας 
το οποίο θα ορίζει ο χρήστης μέσω της web σελίδας και το output θα είναι τα 5 πιο συχνά φάρμακα 
(για την ακρίβεια, φαρμακευτικές ουσίες) για την ασθένεια αυτή, καθώς και η δυνατότητα χρήσης 
των συγκεκριμένων ουσιών για τη θεραπεία άλλων ασθενειών. 

#ΥΛΟΠΟΙΗΣΗ


 Για την υλοποίηση της εφαρμογής χρημοποιήθηκαν τα Visual Studio Code, Node.js και Eclipse.


 Αρχικά είναι απαιραίτητη η εγκατάσταση των παρακάτω πακέτων.



 Στο cmd πληκτρολογώ τα εξής ώστε να ανοίξει το project μου:



 cd appathon
 
 
Στη συνέχεια στο cmd πληκτρολογώ τις εντολές που βρίσκονται εντός των παρενθέσεων ώστε να εγκατασταθούν 
τα κάτωθι πακέτα:


Yarn (curl -o- -L https://yarnpkg.com/install.sh | bash)


React-Bootstrap  (arn add react-bootstrap)


Bootstrap(yarn add bootstrap)


React-Router(npm install react-router-dom)


jquery(npm install jquery)
   
   
ajax(npm install ajax)
 

Εγκαθιστώ στο index.js το παρακάτω:


Styled Components


( πληκτρολογώντας στο ./public/index.html

           <link
           rel="stylesheet"
           href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
           ntegrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
           crossorigin="anonymous"
           />"
   

Αρχίζω να τρέχω το αρχείο μου MedServlet στο eclipse    


Τέλος πληκτρολογώ στο cmd την εντολή npm start ώστε να αρχίσει να τρέχει η εφαρμογή.


Σημείωση:

Από το φάκελο appathon λείπει ο υποφάκελος node_modules, ο οποίος δεν ανέβηκε καθώς ξεπερνάει
το επιτρεπτό όριο. Έχει δοθεί ο σύνδεσμος Google Drive, ώστε να το κατεβάσετε και να το προσθέσετε στο
φάκελο appathon.

