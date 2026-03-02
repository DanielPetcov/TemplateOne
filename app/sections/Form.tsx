"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FormContact } from "../schemas/formSchema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

import useFadeIn from "@/hooks/useFadeIn";

import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Form() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(FormContact),
    defaultValues: {
      fullName: "",
      willCome: true,
      willBeChildren: false,
      personsNumber: "1",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormContact>> = async (data) => {
    try {
      setLoading(true);
      const response = await fetch("/api/rspv", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast("Înscrierea dvs. a fost trimisă", {
          position: "bottom-center",
        });
        reset();
      }
    } catch {
      toast.error("Ceva nu a mers!");
    } finally {
      setLoading(false);
    }
  };

  const { ref, isVisible } = useFadeIn({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={cn(
        "container mx-auto mt-10 px-10 transition-opacity duration-1000 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nume complet</Label>
          <Input id="fullName" {...register("fullName")} />
          {errors.fullName && (
            <div className="text-xs text-red-500">
              {errors?.fullName.message}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="willCome">Vei veni?</Label>
          <Controller
            name="willCome"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value === true ? "yes" : "no"}
                onValueChange={(v) => field.onChange(v === "yes")}
                id="willCome"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1">Da</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2">Nu</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="willBeChildren">Vei veni cu copii?</Label>
          <Controller
            name="willBeChildren"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value === true ? "yes" : "no"}
                onValueChange={(v) => field.onChange(v === "yes")}
                id="willBeChildren"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2">No</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="personsNumber">Câte persoane vor veni?</Label>
          <Input
            id="personsNumber"
            {...register("personsNumber")}
            type="number"
            min={0}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="comment">Comentariu</Label>
          <Textarea id="comment" {...register("comment")} />
          {errors.comment && (
            <div className="text-xs text-red-500">
              {errors?.comment.message}
            </div>
          )}
        </div>
        <Button
          disabled={loading}
          type="submit"
          size={"lg"}
          className="block mx-auto"
        >
          Trimite
        </Button>
      </form>
    </div>
  );
}
