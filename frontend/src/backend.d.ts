import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ReviewId = bigint;
export type Time = bigint;
export interface ContactMessage {
    dateSubmitted: Time;
    name: string;
    email: string;
    message: string;
}
export type AppointmentId = bigint;
export interface Review {
    id: ReviewId;
    dateSubmitted: Time;
    comment: string;
    patientName: string;
    rating: bigint;
}
export interface Appointment {
    id: AppointmentId;
    status: string;
    clinicLocation: string;
    email: string;
    preferredDate: Time;
    preferredTime: string;
    patientName: string;
    phone: string;
    reason: string;
}
export interface backendInterface {
    addReview(patientName: string, rating: bigint, comment: string): Promise<ReviewId>;
    bookAppointment(patientName: string, email: string, phone: string, clinicLocation: string, preferredDate: Time, preferredTime: string, reason: string): Promise<AppointmentId>;
    deleteReview(id: ReviewId): Promise<void>;
    getAllAppointments(): Promise<Array<Appointment>>;
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getAllReviews(): Promise<Array<Review>>;
    getAppointment(id: AppointmentId): Promise<Appointment>;
    submitContactMessage(name: string, email: string, message: string): Promise<void>;
}
