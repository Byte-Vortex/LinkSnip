import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeatureComparison() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Feature Comparison
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              See how LinkSnip compares to other URL shorteners in the market.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead className="text-center">LinkSnip</TableHead>
                    <TableHead className="text-center">Competitor A</TableHead>
                    <TableHead className="text-center">Competitor B</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Custom Slugs</TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      QR Code Generation
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Detailed Analytics
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Geographic Data
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Device Tracking
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">API Access</TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Team Collaboration
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
