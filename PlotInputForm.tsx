"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PlotData {
  length: number;
  width: number;
  floors: number;
}

export default function PlotInputForm({ 
  plotData, 
  setPlotData 
}: { 
  plotData: PlotData; 
  setPlotData: (data: PlotData) => void; 
}) {
  const handleInputChange = (field: keyof PlotData, value: number | string) => {
    setPlotData({
      ...plotData,
      [field]: value,
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="length">Plot Length (feet)</Label>
          <Input
            id="length"
            type="number"
            value={plotData.length || ""}
            onChange={(e) => handleInputChange("length", Number(e.target.value))}
            placeholder="Enter length"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="width">Plot Width (feet)</Label>
          <Input
            id="width"
            type="number"
            value={plotData.width || ""}
            onChange={(e) => handleInputChange("width", Number(e.target.value))}
            placeholder="Enter width"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Number of Floors: {plotData.floors}</Label>
        <Slider
          min={1}
          max={4}
          step={1}
          value={[plotData.floors]}
          onValueChange={(value) => handleInputChange("floors", value[0])}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="plot-type">Plot Type</Label>
        <Select>
          <SelectTrigger id="plot-type">
            <SelectValue placeholder="Select plot type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rectangular">Rectangular</SelectItem>
            <SelectItem value="square">Square</SelectItem>
            <SelectItem value="l-shaped">L-Shaped</SelectItem>
            <SelectItem value="irregular">Irregular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="orientation">Preferred Orientation</Label>
        <Select>
          <SelectTrigger id="orientation">
            <SelectValue placeholder="Select orientation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="north">North Facing</SelectItem>
            <SelectItem value="south">South Facing</SelectItem>
            <SelectItem value="east">East Facing</SelectItem>
            <SelectItem value="west">West Facing</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
