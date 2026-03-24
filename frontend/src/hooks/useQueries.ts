import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Review, Appointment } from '@/backend';

// Review Queries
export function useGetAllReviews() {
  const { actor, isFetching } = useActor();

  return useQuery<Review[]>({
    queryKey: ['reviews'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddReview() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ patientName, rating, comment }: { patientName: string; rating: bigint; comment: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.addReview(patientName, rating, comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
}

export function useDeleteReview() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.deleteReview(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
}

// Appointment Queries
export function useGetAllAppointments() {
  const { actor, isFetching } = useActor();

  return useQuery<Appointment[]>({
    queryKey: ['appointments'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllAppointments();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBookAppointment() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      patientName,
      email,
      phone,
      clinicLocation,
      preferredDate,
      preferredTime,
      reason,
    }: {
      patientName: string;
      email: string;
      phone: string;
      clinicLocation: string;
      preferredDate: bigint;
      preferredTime: string;
      reason: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.bookAppointment(patientName, email, phone, clinicLocation, preferredDate, preferredTime, reason);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });
}
