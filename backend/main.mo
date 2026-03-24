import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Time "mo:core/Time";



actor {
  type ReviewId = Nat;
  type AppointmentId = Nat;

  var nextReviewId = 0; // Remove nextArticleId
  var nextAppointmentId = 0;

  type Review = {
    id : ReviewId;
    patientName : Text;
    rating : Nat;
    comment : Text;
    dateSubmitted : Time.Time;
  };

  module Review {
    public func compare(review1 : Review, review2 : Review) : Order.Order {
      Nat.compare(review1.id, review2.id);
    };
  };

  type Appointment = {
    id : AppointmentId;
    patientName : Text;
    email : Text;
    phone : Text;
    clinicLocation : Text;
    preferredDate : Time.Time;
    preferredTime : Text;
    reason : Text;
    status : Text;
  };

  module Appointment {
    public func compare(appointment1 : Appointment, appointment2 : Appointment) : Order.Order {
      Nat.compare(appointment1.id, appointment2.id);
    };
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    dateSubmitted : Time.Time;
  };

  module ContactMessage {
    public func compareByDate(message1 : ContactMessage, message2 : ContactMessage) : Order.Order {
      Int.compare(message1.dateSubmitted, message2.dateSubmitted);
    };
  };

  // Remove articles map
  let reviews = Map.empty<Nat, Review>();
  let appointments = Map.empty<Nat, Appointment>();
  let contactMessages = Map.empty<Nat, ContactMessage>();

  // Review Management
  public shared ({ caller }) func addReview(patientName : Text, rating : Nat, comment : Text) : async ReviewId {
    let id = nextReviewId;
    nextReviewId += 1;
    let review : Review = {
      id;
      patientName;
      rating;
      comment;
      dateSubmitted = Time.now();
    };
    reviews.add(id, review);
    id;
  };

  public query ({ caller }) func getAllReviews() : async [Review] {
    reviews.values().toArray().sort();
  };

  public shared ({ caller }) func deleteReview(id : ReviewId) : async () {
    switch (reviews.get(id)) {
      case (null) { Runtime.trap("Review not found") };
      case (?_) {
        reviews.remove(id);
        ();
      };
    };
  };

  // Appointment Management
  public shared ({ caller }) func bookAppointment(patientName : Text, email : Text, phone : Text, clinicLocation : Text, preferredDate : Time.Time, preferredTime : Text, reason : Text) : async AppointmentId {
    let id = nextAppointmentId;
    nextAppointmentId += 1;
    let appointment : Appointment = {
      id;
      patientName;
      email;
      phone;
      clinicLocation;
      preferredDate;
      preferredTime;
      reason;
      status = "pending";
    };
    appointments.add(id, appointment);
    id;
  };

  public query ({ caller }) func getAppointment(id : AppointmentId) : async Appointment {
    switch (appointments.get(id)) {
      case (null) { Runtime.trap("Appointment not found") };
      case (?appointment) { appointment };
    };
  };

  public query ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.values().toArray().sort();
  };

  // Contact Message Management
  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    let id = nextReviewId;
    nextReviewId += 1;
    let contactMessage : ContactMessage = {
      name;
      email;
      message;
      dateSubmitted = Time.now();
    };
    contactMessages.add(id, contactMessage);
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray().sort(ContactMessage.compareByDate);
  };
};
