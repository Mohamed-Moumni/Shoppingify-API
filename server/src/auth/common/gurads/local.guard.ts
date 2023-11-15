import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Strategy } from "passport-local";
import { AuthGuard } from "@nestjs/passport";

export class LocalGuard extends AuthGuard('local'){
}